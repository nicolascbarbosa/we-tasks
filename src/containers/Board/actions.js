import uuidv4 from 'uuid/v4';

import { dispatch } from 'Store';
import { ActionTypes as types } from './constants';

export const addTodo = (value, id = uuidv4()) => ({ type: types.ADD_TODO, payload: { id, value } });
export const deleteTodo = id => ({ type: types.DELETE_TODO, payload: { id } });
export const deleteComplete = id => ({ type: types.DELETE_COMPLETE, payload: { id } });
export const orderVisibility = (dataKey, newOrder) => ({
  type: types.ORDER_VISIBILITY,
  payload: { dataKey, newOrder },
});
export const moveItem = (item) => {
  if (item.dragDataKey === 'todos') {
    dispatch(deleteComplete(item.id));
  } else {
    dispatch(deleteTodo(item.id));
  }

  return {
    type: types.MOVE_ITEM,
    payload: { item },
  };
};
