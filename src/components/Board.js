import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BoardInput from './BoardInput'
import BoardFilters from './BoardFilters'
import BoardCard from './BoardCard'
import BoardPreview from './BoardPreview'

import { SHOW_ALL, SHOW_COMPLETED } from '../constants/TodoFilters'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_COMPLETED]: todo => todo.completed
}

export default class Board extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,    
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  state = { filter: SHOW_ALL }

  handleClearCompleted = () => {
    this.props.actions.clearCompleted()
  }

  handleShow = filter => {
    this.setState({ filter })
  }

  renderFooter(completedCount) {
    const { todos } = this.props
    const { filter } = this.state

    if (todos.length) {
      return (
        <BoardPreview filter={filter} onShow={this.handleShow} />
      )
    }
  }

  render() {
    const { todos, actions } = this.props
    const { filter } = this.state

    const filteredTodos = todos.filter(TODO_FILTERS[filter])

    return (
      <section className="board">
        <BoardInput newTodo
                    onSave={this.handleSave}
                    placeholder="type your task" />   
     
        <BoardFilters/>
        <BoardCard  filteredTodos={filteredTodos} {...actions} />
        {this.renderFooter()}
      </section>
    )
  }
}
