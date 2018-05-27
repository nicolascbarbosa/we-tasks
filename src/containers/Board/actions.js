import { ActionTypes as types } from './constants';

export const addTodo = value => ({ type: types.ADD_TODO, payload: { value } });
export const deleteTodo = id => ({ type: types.DELETE_TODO, payload: { id } });
export const deleteComplete = id => ({ type: types.DELETE_COMPLETE, payload: { id } });
export const orderVisibility = (dataKey, newOrder) => ({
  type: types.ORDER_VISIBILITY,
  payload: { dataKey, newOrder },
});
