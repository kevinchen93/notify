import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cookies from 'universal-cookie'

import Navbar from './navbar'
import ModalContainer from './modal_container'
import  { requestAlerts } from '../actions/alert_actions'
import { openModal, setModalComponent, closeModal } from '../actions/ui_actions'

class App extends Component {
  state = {
    alerts: [],
    seenAlerts: false,
  }

  componentDidMount() {
    this.props.requestAlerts()
    const cookies = new Cookies()
    if (cookies.get('seenAlerts')) {
      this.setState({ seenAlerts: true })
    }
  }

  handleModalClick = () => {
    let func
    if (!this.props.isOpen) {
      func = () => {
        this.props.openModal()
        this.props.setModalComponent('show')
      }
    } else {
      func = () => {
        const cookies = new Cookies()
        if (!cookies.get('seenAlerts')) {
          cookies.set('seenAlerts', true, { path: '/' })
        }
        console.log('WE ARE HERE IN CLOSE MODAL')
        this.setState({ seenAlerts: true }, () => this.props.closeModal())
      }
    }
    return func()
  }

  render() {
    if (!this.props.alerts) return <div></div>
    const notificationCount = this.state.seenAlerts ? 0 : this.props.alerts.length
    return (
      <div className="App">
        <Navbar handleModalClick={this.handleModalClick} seenAlerts={this.state.seenAlerts} notificationCount={notificationCount} />
        <ModalContainer handleModalClick={this.handleModalClick}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  alerts: state.entities.alerts,
  isOpen: state.ui.modal.isOpen
})

const mapDispatchToProps = dispatch => ({
  requestAlerts: () => dispatch(requestAlerts()),
  openModal: () => dispatch(openModal()),
  setModalComponent: comp => dispatch(setModalComponent(comp)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
