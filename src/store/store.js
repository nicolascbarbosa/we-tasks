import { createStore, compose } from 'redux';

import reducers from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof global.window === 'object' && global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

const localStorageState = {};

const persistedState = { todos: {} };
const store = createStore(reducers, persistedState, composeEnhancers());

export default store;
