import { combineReducers } from 'redux';

import todos from '../containers/reducers';

const reducers = combineReducers({
  todos,
});

export default reducers;
