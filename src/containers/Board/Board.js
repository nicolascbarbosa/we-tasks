import React from 'react';
import PropTypes from 'prop-types';

import { Column, Cards, CardItem, Filters, InputForm, Title } from './components';

import styles from './Board.scss';

const Board = ({
  tasks, addTodo, deleteTodo, orderVisibility, deleteComplete,
}) => (
  <div className={styles.board}>
    <InputForm onSubmit={addTodo} />
    <Column>
      <Title title="Todas" />
      <Cards dropDataKey="todos">
        {tasks.todos.data.map(item => (
          <CardItem
            key={item.id}
            id={item.id}
            text={item.text}
            deleteCard={deleteTodo}
            dragDataKey="complete"
          />
        ))}
      </Cards>
      <Filters
        keyDataOrder="todos"
        currentOrderVisibility={tasks.todos.order}
        changeOrderVisibility={orderVisibility}
      />
    </Column>
    <Column>
      <Title title="Completas" />
      <Cards dropDataKey="complete">
        {tasks.complete.data.map(item => (
          <CardItem
            key={item.id}
            id={item.id}
            text={item.text}
            deleteCard={deleteComplete}
            dragDataKey="todos"
          />
        ))}
      </Cards>
      <Filters
        keyDataOrder="complete"
        currentOrderVisibility={tasks.complete.order}
        changeOrderVisibility={orderVisibility}
      />
    </Column>
  </div>
);

Board.propTypes = {
  tasks: PropTypes.object.isRequired,
  addTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  deleteComplete: PropTypes.func.isRequired,
  orderVisibility: PropTypes.func.isRequired,
};

export default Board;
