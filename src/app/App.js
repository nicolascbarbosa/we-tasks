import React from 'react';

import { Header, Board } from 'Containers';

import './App.scss';

const App = () => (
  <section className="appContent">
    <Header title="We Tasks" />
    <Board />
  </section>
);

export default App;
