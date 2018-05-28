import uuidv4 from 'uuid/v4';

import * as actions from '../src/containers/Board/actions';
import { ActionTypes as types, ORDER_RECENT, ORDER_OLD } from '../src/containers/Board/constants';

describe('board actions creators', () => {
  it('should create an action to ADD a TODO item', () => {
    const id = uuidv4();
    const value = 'New Task';
    const expectedAction = {
      type: types.ADD_TODO,
      payload: {
        id,
        value,
      },
    };
    expect(actions.addTodo(value, id)).toEqual(expectedAction);
  });

  it('should create an action to DELETE a TODO item', () => {
    const id = uuidv4();
    const expectedAction = {
      type: types.DELETE_TODO,
      payload: {
        id,
      },
    };
    expect(actions.deleteTodo(id)).toEqual(expectedAction);
  });
  it('should create an action to DELETE a COMPLETE item', () => {
    const id = uuidv4();
    const expectedAction = {
      type: types.DELETE_COMPLETE,
      payload: {
        id,
      },
    };
    expect(actions.deleteComplete(id)).toEqual(expectedAction);
  });
  it('should create an action ORDER_VISIBILITY to ORDER_RECENT in TODO items', () => {
    const dataKey = 'todos';
    const newOrder = ORDER_RECENT;
    const expectedAction = {
      type: types.ORDER_VISIBILITY,
      payload: {
        dataKey,
        newOrder,
      },
    };
    expect(actions.orderVisibility(dataKey, newOrder)).toEqual(expectedAction);
  });
  it('should create an action ORDER_VISIBILITY to ORDER_OLD in TODO items', () => {
    const dataKey = 'todos';
    const newOrder = ORDER_OLD;
    const expectedAction = {
      type: types.ORDER_VISIBILITY,
      payload: {
        dataKey,
        newOrder,
      },
    };
    expect(actions.orderVisibility(dataKey, newOrder)).toEqual(expectedAction);
  });
  it('should create an action ORDER_VISIBILITY to ORDER_RECENT in COMPLETE items', () => {
    const dataKey = 'complete';
    const newOrder = ORDER_RECENT;
    const expectedAction = {
      type: types.ORDER_VISIBILITY,
      payload: {
        dataKey,
        newOrder,
      },
    };
    expect(actions.orderVisibility(dataKey, newOrder)).toEqual(expectedAction);
  });
  it('should create an action ORDER_VISIBILITY to ORDER_OLD in COMPLETE items', () => {
    const dataKey = 'complete';
    const newOrder = ORDER_OLD;
    const expectedAction = {
      type: types.ORDER_VISIBILITY,
      payload: {
        dataKey,
        newOrder,
      },
    };
    expect(actions.orderVisibility(dataKey, newOrder)).toEqual(expectedAction);
  });
});
