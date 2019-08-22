import React, { Component } from 'react'

class Modal extends Component {
  state = {
    isOpen: false,
  }

  render() {
    return(
      <div>Modal component { this.props.alerts }</div>
    )
  }
}

export default Modal