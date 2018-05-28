import { INITIAL_STATE, ActionTypes as types } from './constants';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          data: [
            ...state.todos.data,
            {
              id: action.payload.id,
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
    case types.MOVE_ITEM:
      return {
        ...state,
        [action.payload.item.dragDataKey]: {
          ...state[action.payload.item.dragDataKey],
          data: [
            ...state[action.payload.item.dragDataKey].data,
            {
              id: action.payload.item.id,
              text: action.payload.item.text,
            },
          ],
        },
      };
    default:
      return state;
  }
};
