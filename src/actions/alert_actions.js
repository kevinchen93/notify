import fetchAlerts from '../util/alert_api_util'

export const RECEIVE_ALERTS = 'RECEIVE_ALERTS'

// Regular actions
export const receiveAlerts = alerts => {
  return {
    type: RECEIVE_ALERTS,
    alerts
  }
}

// Thunk actions
export const requestAlerts = () => {
  return dispatch => fetchAlerts().then(
    res => dispatch(receiveAlerts(res))
  )
}