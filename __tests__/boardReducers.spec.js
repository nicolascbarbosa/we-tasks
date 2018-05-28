import uuidv4 from 'uuid/v4';

import reducer from '../src/containers/Board/reducers';
import {
  ActionTypes as types,
  INITIAL_STATE,
  ORDER_RECENT,
  ORDER_OLD,
} from '../src/containers/Board/constants';

describe('todos reducer', () => {
  it('should return the initial state of store', () => {
    expect(reducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
  });

  it('should handle ADD a TODO item', () => {
    const data = {
      type: types.ADD_TODO,
      payload: {
        id: uuidv4(),
        value: 'New Task',
      },
    };

    const dataMock = {
      id: data.payload.id,
      text: data.payload.value,
    };

    expect(reducer(INITIAL_STATE, data)).toEqual({
      todos: {
        ...INITIAL_STATE.todos,
        data: [...INITIAL_STATE.todos.data, dataMock],
      },
      complete: INITIAL_STATE.complete,
    });
  });

  it('should handle DELETE a TODO item', () => {
    const data = {
      type: types.DELETE_TODO,
      payload: {
        id: uuidv4(),
      },
    };

    const dataMock = {
      id: data.payload.id,
      text: 'Any Task',
    };

    expect(reducer(
      {
        todos: {
          ...INITIAL_STATE.todos,
          data: [...INITIAL_STATE.todos.data, dataMock],
        },
        complete: INITIAL_STATE.complete,
      },
      data,
    )).toEqual({
      todos: {
        ...INITIAL_STATE.todos,
        data: INITIAL_STATE.todos.data,
      },
      complete: INITIAL_STATE.complete,
    });
  });

  it('should handle DELETE a COMPLETE item', () => {
    const data = {
      type: types.DELETE_COMPLETE,
      payload: {
        id: uuidv4(),
      },
    };

    const dataMock = {
      id: data.payload.id,
      text: 'Any Task',
    };

    expect(reducer(
      {
        todos: INITIAL_STATE.todos,
        complete: {
          ...INITIAL_STATE.complete,
          data: [...INITIAL_STATE.complete.data, dataMock],
        },
      },
      data,
    )).toEqual({
      todos: INITIAL_STATE.todos,
      complete: {
        ...INITIAL_STATE.complete,
        data: INITIAL_STATE.complete.data,
      },
    });
  });

  it('should handle ORDER_VISIBILITY to ORDER_RECENT a TODO item', () => {
    const dataKey = 'todos';
    const newOrder = ORDER_RECENT;

    const data = {
      type: types.ORDER_VISIBILITY,
      payload: {
        dataKey,
        newOrder,
      },
    };

    const dataMock = {
      order: data.payload.newOrder,
    };

    expect(reducer(
      {
        todos: INITIAL_STATE.todos,
        complete: INITIAL_STATE.complete,
      },
      data,
    )).toEqual({
      todos: {
        ...INITIAL_STATE.todos,
        ...dataMock,
      },
      complete: INITIAL_STATE.complete,
    });
  });

  it('should handle ORDER_VISIBILITY to ORDER_OLD a TODO item', () => {
    const dataKey = 'todos';
    const newOrder = ORDER_OLD;

    const data = {
      type: types.ORDER_VISIBILITY,
      payload: {
        dataKey,
        newOrder,
      },
    };

    const dataMock = {
      order: data.payload.newOrder,
    };

    expect(reducer(
      {
        todos: INITIAL_STATE.todos,
        complete: INITIAL_STATE.complete,
      },
      data,
    )).toEqual({
      todos: {
        ...INITIAL_STATE.todos,
        ...dataMock,
      },
      complete: INITIAL_STATE.complete,
    });
  });

  it('should handle ORDER_VISIBILITY to ORDER_RECENT a COMPLETE item', () => {
    const dataKey = 'complete';
    const newOrder = ORDER_RECENT;

    const data = {
      type: types.ORDER_VISIBILITY,
      payload: {
        dataKey,
        newOrder,
      },
    };

    const dataMock = {
      order: data.payload.newOrder,
    };

    expect(reducer(
      {
        todos: INITIAL_STATE.todos,
        complete: INITIAL_STATE.complete,
      },
      data,
    )).toEqual({
      todos: INITIAL_STATE.todos,
      complete: {
        ...INITIAL_STATE.complete,
        ...dataMock,
      },
    });
  });

  it('should handle ORDER_VISIBILITY to ORDER_OLD a COMPLETE item', () => {
    const dataKey = 'complete';
    const newOrder = ORDER_OLD;

    const data = {
      type: types.ORDER_VISIBILITY,
      payload: {
        dataKey,
        newOrder,
      },
    };

    const dataMock = {
      order: data.payload.newOrder,
    };

    expect(reducer(
      {
        todos: INITIAL_STATE.todos,
        complete: INITIAL_STATE.complete,
      },
      data,
    )).toEqual({
      todos: INITIAL_STATE.todos,
      complete: {
        ...INITIAL_STATE.complete,
        ...dataMock,
      },
    });
  });
});
