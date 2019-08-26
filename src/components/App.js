import React, { Component } from 'react'
import { connect } from 'react-redux'

import ModalContainer from './modal_container'
import { requestAlerts } from '../actions/alert_actions'

class App extends Component {
  state = {
    alerts: [],
  }

  componentDidMount() {
    this.props.requestAlerts()
  }

  render() {
    if (!this.props.alerts) return <div></div>
    return (
      <div className="App">
        This is my app!
        <ModalContainer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  alerts: state.entities.alerts
})

const mapDispatchToProps = dispatch => ({
  requestAlerts: () => dispatch(requestAlerts())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
