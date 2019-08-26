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
    this.props.requestAlerts()
  }

  render() {
    if (!this.props.alerts) return <div></div>
    return (
      <div className="App">
        <Modal alerts={this.props.alerts} />
        This is my app!
      </div>
    )
  }
}

const mapStateToProps = state => ({
  alerts: state.entities.alerts
})

const mapDispatchToProps = dispatch => {
  return {
    requestAlerts: () => dispatch(requestAlerts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
