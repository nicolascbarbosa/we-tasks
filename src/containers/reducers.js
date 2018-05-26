import { combineReducers } from 'redux';

import board from './Board/reducers';

const reducers = combineReducers({
  board,
});

export default reducers;
