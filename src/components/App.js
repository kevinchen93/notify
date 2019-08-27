import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from './navbar'
import ModalContainer from './modal_container'
import { openModal, setModalComponent, closeModal } from '../actions/ui_actions'

class App extends Component {
  state = {
    alerts: [],
    modalOpen: false
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
        this.props.closeModal()
      }
    }
    return func()
  }

  render() {
    if (!this.props.alerts) return <div></div>
    return (
      <div className="App">
        <Navbar handleModalClick={this.handleModalClick} />
        <ModalContainer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  alerts: state.entities.alerts,
  isOpen: state.ui.modal.isOpen
})

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal()),
  setModalComponent: comp => dispatch(setModalComponent(comp)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
