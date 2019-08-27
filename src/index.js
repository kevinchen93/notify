import React from 'react'
import ReactDOM from 'react-dom'

import Root from './components/root'
import configureStore from './store/store'

import './stylesheets/reset.css'
import './stylesheets/main.css'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  ReactDOM.render(<Root store={store} />, document.getElementById('root'))
})
