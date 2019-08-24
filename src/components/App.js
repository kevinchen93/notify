import React, { Component } from 'react'
import { connect } from 'react-redux'

import Modal from './modal/Modal'
import { requestAlerts } from '../actions/alert_actions'

class App extends Component {
  state = {
    alerts: [],
    showModal: false,
  }

  componentDidMount() {
    requestAlerts()
  }

  render() {
    const { alerts } = this.state 
    console.log('REDUX', alerts)
    return (
      <div className="App">
        <Modal alerts={alerts} />
        This is my app!
      </div>
    )
  }
}

const mapStateToProps = state => ({
  alerts: state.alerts
})

export default connect(mapStateToProps, null)(App)
