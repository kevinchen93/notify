import { combineReducers } from 'redux'
import alertsReducer from './alerts_reducer'

const entitiesReducer = combineReducers({
  alerts: alertsReducer,
});

export default entitiesReducer