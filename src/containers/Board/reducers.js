import { INITIAL_STATE, ActionTypes as types } from './constants';

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          data: [
            ...state.todos.data,
            {
              id: state.todos.data.reduce((maxId, task) => Math.max(task.id, maxId), -1) + 1,
              text: action.payload.value,
            },
          ],
        },
      };

    case types.DELETE_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          data: state.todos.data.filter(task => task.id !== action.payload.id),
        },
      };
    case types.DELETE_COMPLETE:
      return {
        ...state,
        complete: {
          ...state.todos,
          data: state.complete.data.filter(task => task.id !== action.payload.id),
        },
      };
    case types.ORDER_VISIBILITY:
      return {
        ...state,
        [action.payload.dataKey]: {
          ...state[action.payload.dataKey],
          data: state[action.payload.dataKey].data.reverse(),
          order: action.payload.newOrder,
        },
      };

    default:
      return state;
  }
}
