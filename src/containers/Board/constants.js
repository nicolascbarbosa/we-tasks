export const ActionTypes = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  DELETE_COMPLETE: 'DELETE_COMPLETE',
  ORDER_VISIBILITY: 'ORDER_VISIBILITY',
};

export const ORDER_RECENT = 'ORDER_RECENT';
export const ORDER_OLD = 'ORDER_OLD';

export const INITIAL_STATE = {
  todos: {
    data: [],
    order: ORDER_RECENT,
  },
  complete: {
    data: [],
    order: ORDER_RECENT,
  },
};
