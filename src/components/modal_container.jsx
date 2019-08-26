import React from 'react'
import { connect } from 'react-redux'

import { closeModal } from '../actions/ui_actions'
import AlertModalContainer from './modals/alert_modal_container.jsx'

import '../assets/modal.scss'

const Modal = (props) => {
  console.log('MODALs PROPS', props)
  let component
  if (props.modal.component === 'show') {
    component = <AlertModalContainer modalProps={props.modal.modalProps} />
  }

  return (
    <div className={"modal" + (props.modal.isOpen ? "" : " hidden")} onClick={props.close}>
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
  close: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)