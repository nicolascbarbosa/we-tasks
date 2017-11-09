import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './BoardInput'

export default class BoardCard extends Component {

  static propTypes = {
    filteredTodos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }


  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const { filteredTodos, completeTodo, deleteTodo } = this.props

    return (
      <div className="board-cards">
        <ul className="cards">
          {filteredTodos.map(todo => 
            <li className={classnames(
              'card', {
              completed: todo.completed
            })}
            key={todo.id} todo={todo}
            >
              <span className="text">{todo.text}</span>
              <button className="btn-card-action -delete" onClick={() => deleteTodo(todo.id)}>Excluir</button>              
              <button className="btn-card-action -complete" onClick={() => completeTodo(todo.id)}>Completo</button>
            </li>
          )}
        </ul>
      </div>
    )
  }
}
