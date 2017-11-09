import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, autoRehydrate } from 'redux-persist';

import App from './containers/App'
import reducers from './reducers'

import './scss/index.scss';

const store = createStore(
  reducers,
  undefined,
  compose(
    autoRehydrate,
  ),
);

persistStore(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
