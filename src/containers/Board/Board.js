import React from 'react';

import { Column, Cards, CardItem, Filters, InputForm, Title } from './components';

import styles from './Board.scss';

export default class Board extends React.Component {
  render() {
    const { tasks } = this.props;
    return (
      <div className={styles.board}>
        <InputForm onSubmit={this.props.addTodo} />
        <Column>
          <Title title="Todas" />
          <Cards>
            {tasks.todos.data.map(item => (
              <CardItem
                key={item.id}
                id={item.id}
                text={item.text}
                deleteCard={this.props.deleteTodo}
              />
            ))}
          </Cards>
          <Filters
            keyDataOrder="todos"
            currentOrderVisibility={tasks.todos.order}
            changeOrderVisibility={this.props.orderVisibility}
          />
        </Column>
        <Column>
          <Title title="Completas" />
          <Cards>
            {tasks.complete.data.map(item => (
              <CardItem
                key={item.id}
                id={item.id}
                text={item.text}
                deleteCard={this.props.deleteComplete}
              />
            ))}
          </Cards>
          <Filters
            keyDataOrder="complete"
            currentOrderVisibility={tasks.complete.order}
            changeOrderVisibility={this.props.orderVisibility}
          />
        </Column>
      </div>
    );
  }
}
