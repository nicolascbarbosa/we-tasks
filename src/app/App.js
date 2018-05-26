import React from 'react';

import { Header, Board } from 'Containers';

import Container from './components';

import './App.scss';

const App = () => (
  <Container>
    <Header title="We Tasks" />
    <Board />
  </Container>
);

export default App;
