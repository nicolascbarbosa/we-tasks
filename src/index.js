import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';

import { store } from 'Store';

import App from './app';

render(
  <Provider store={store}>
    <DragDropContextProvider backend={HTML5Backend}>
      <App />
    </DragDropContextProvider>
  </Provider>,
  global.document.getElementById('app'),
);
