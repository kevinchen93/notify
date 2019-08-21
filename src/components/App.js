import React, { Component } from 'react'

import Modal from './modal/Modal'
import parseMarkdown from '../util/parseMarkdown'

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
    return fetch(API)
            .then(res => res.json())
            .then(markdown => {
              const alerts = parseMarkdown(markdown.files["changelog.md"].content)
              this.setState({
                alerts: alerts
              })
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
