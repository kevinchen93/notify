import { compose, createStore, applyMiddleware } from 'redux'
import thunk from '../reducers/thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers/root_reducer'

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, compose(applyMiddleware(thunk, logger)))
}

export default configureStore