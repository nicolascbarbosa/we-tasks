import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './reducers';
import localStorageMiddleware from './middlewares';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof global.window === 'object' && global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

const localStorageState = JSON.parse(global.window.localStorage.getItem('state'));
const middlewares = applyMiddleware(localStorageMiddleware);

const persistedState = localStorageState ? { todos: { board: localStorageState } } : {};
const store = createStore(reducers, persistedState, composeEnhancers(middlewares));

export default store;
