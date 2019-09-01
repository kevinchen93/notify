import React from 'react'
import { connect } from 'react-redux'

import { closeModal } from '../actions/ui_actions'
import AlertModalContainer from './modals/alert_modal_container.jsx'

import '../stylesheets/modal.scss'

const Modal = (props) => {
  let component
  if (props.modal.component === 'show') {
    component = <AlertModalContainer />
  }

  return (
    <div className={"modal" + (props.modal.isOpen ? "" : " hidden")} onClick={props.handleModalClick}>
      <div className="modal-content-container" onClick={(e) => { e.stopPropagation() }}>
        {component}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  modal: state.ui.modal
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)