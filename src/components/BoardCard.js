import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { SHOW_RECENTS } from '../constants/TodoOrderBy';

export default class BoardCard extends Component {
  static propTypes = {
    order: PropTypes.string.isRequired,
    filteredTodos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  orderBy(todos) {
    const { order } = this.props;
    return order === SHOW_RECENTS ? todos.reverse() : todos;
  }

  render() {
    const { filteredTodos, completeTodo, deleteTodo } = this.props;

    const listTodos = this.orderBy(filteredTodos);

    return (
      <div className="board-cards">
        <ul className="cards">
          {listTodos.map(todo =>
            (
              <li
                className={classnames('card', {
                  completed: todo.completed
                })}
                key={todo.id}
                todo={todo}
              >
                <span className="text">{todo.text}</span>
                <button className="btn-card-action -delete" onClick={() => deleteTodo(todo.id)}>Excluir</button>
                <button className="btn-card-action -complete" onClick={() => completeTodo(todo.id)}>
                  { !todo.completed ? 'Completo' : 'Desmarcar' }
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
