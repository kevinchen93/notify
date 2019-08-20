import React, { Component } from 'react'

import Modal from './modal/Modal'

const API = ''

class App extends Component {
  state = {
    alerts: [],
    showModal: false,
  }

  componentDidMount() {
  }

  callApi() {
  }

  render() {
    const { alerts } = this.state 

    return (
      <div className="App">
        <Modal alerts={alerts} />
      </div>
    )
  }
}

export default App
