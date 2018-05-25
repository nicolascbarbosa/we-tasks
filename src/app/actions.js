import * as types from './constants';

export const addTodo = task => ({ type: types.ADD_TODO, payload: task });
export const deleteTodo = id => ({ type: types.DELETE_TODO, payload: id });
export const completeTodo = id => ({ type: types.COMPLETE_TODO, payload: id });
