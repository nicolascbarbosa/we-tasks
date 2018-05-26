export default store => next => (action) => {
  next(action);
  global.window.localStorage.setItem('state', JSON.stringify(store.getState().todos.board));
};
