export const RECEIVE_ALERTS = 'RECEIVE_ALERTS'

// Regular actions
export const receiveAlerts = alerts => {
  return {
    type: RECEIVE_ALERTS,
    alerts
  }
}

