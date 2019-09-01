import { connect } from 'react-redux'

import AlertModal from './alert_modal'
import { requestAlerts } from '../../actions/alert_actions'
import { closeModal } from '../../actions/ui_actions'

const mapStateToProps = (state) => {
  return {
    alerts: state.entities.alerts,
}};

const mapDispatchToProps = (dispatch) => ({
  requestAlerts: () => dispatch(requestAlerts()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertModal);