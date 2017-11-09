import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BoardInput from './BoardInput'
import BoardFilters from './BoardFilters'
import BoardCard from './BoardCard'
import BoardPreview from './BoardPreview'

import { SHOW_ALL, SHOW_COMPLETED } from '../constants/TodoPreviews'
import { SHOW_RECENTS } from '../constants/TodoOrderBy'


const TODO_PREVIEW = {
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

  state = { filter: SHOW_ALL, order: SHOW_RECENTS }

  handleShow = filter => {
    this.setState({ filter })
  }
  
  handleOrder = order => {
    if(this.state.order == order) return
    
    this.setState({ order });
  }

  render() {
    const { todos, actions } = this.props
    const { filter, order } = this.state

    const filteredTodos = todos.filter(TODO_PREVIEW[filter])

    return (
      <section className="board">
        <BoardInput newTodo
                    onSave={this.handleSave}
                    placeholder="type your task" />   
     
        <BoardFilters order={order} onOrder={this.handleOrder}/>
        <BoardCard order={order} filteredTodos={filteredTodos} {...actions} />
        {
           todos.length ? <BoardPreview filter={filter} onShow={this.handleShow} /> : ''
        }
      </section>
    )
  }
}
