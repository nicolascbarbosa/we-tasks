import { combineReducers } from 'redux';

import todos from '../app/reducers';

const root = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducers = combineReducers({
  root,
  todos,
});

export default reducers;
