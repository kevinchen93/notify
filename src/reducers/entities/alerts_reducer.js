import { RECEIVE_ALERTS } from '../../actions/alert_actions'

const alertsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALERTS:
      return action.alerts
    default:
      return state
  }
}

export default alertsReducer