import { connect } from 'react-redux'

import AlertModal from './alert_modal'
import { closeModal } from '../../actions/ui_actions'

const mapStateToProps = (state) => ({
  alerts: state.entities.alerts
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertModal);