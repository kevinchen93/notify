import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { openModal, setModalComponent } from '../actions/ui_actions'

import husky from '../assets/husky.png'
import '../stylesheets/navbar.scss'

const Navbar = (props) => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo-container">
          <Link to={"/"}>
            <h1>
              notify
            </h1>
          </Link>
        </div>
        <div className="icon-container" onClick={() => { props.handleModalClick() }}>
          <img className="logo-image" src={husky} alt="husky" />
          <div className={"notification-count-wrapper" + (props.seenAlerts ? " hidden" : "")}>
            <div className="notification-count">{props.notificationCount}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isOpen: state.ui.modal.isOpen
})

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal()),
  setModalComponent: comp => dispatch(setModalComponent(comp)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)