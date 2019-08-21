import React, { Component } from 'react'

import Modal from './modal/Modal'

const API = 'https://api.github.com/gists/86ad06a3774e548d2468b740cb8b0eeb'

class App extends Component {
  state = {
    alerts: [],
    showModal: false,
  }

  componentDidMount() {
    this.callApi()
  }

  callApi() {
    return fetch(API).then(res => {
      console.log('RES', res)
      return res.json()
    })
  }

  render() {
    const { alerts } = this.state 

    return (
      <div className="App">
        <Modal alerts={alerts} />
        This is my app!
      </div>
    )
  }
}

export default App
