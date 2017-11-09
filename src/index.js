import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { save, load } from 'redux-localstorage-simple'

import App from './containers/App'
import reducers from './reducers'

import './scss/index.scss';

const createStoreWithMiddleware = applyMiddleware(
    save() 
)(createStore)

const store = createStoreWithMiddleware(
  reducers,    
  load()
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
