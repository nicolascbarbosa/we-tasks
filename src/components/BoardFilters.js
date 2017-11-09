import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { SHOW_RECENTS, SHOW_OLDERS } from '../constants/TodoOrderBy'

const FILTER_TITLES = {
  [SHOW_RECENTS]: 'Mais Recentes',
  [SHOW_OLDERS]: 'Mais Antigas'
}

export default class BoardFilters extends Component {
  
  static propTypes = {
    order: PropTypes.string.isRequired,    
    onOrder: PropTypes.func.isRequired
  }

  renderButtons(item) {
    const title = FILTER_TITLES[item]
    const { order: selectedOrder, onOrder } = this.props
   
    return (
      <button key={item}
              type="button"
              className={classnames(
                'btn-filter', { 
                  '-selected' : item === selectedOrder
                })}
                onClick={() => onOrder(item)}
      >
        {title}
      </button>  
    )
  }

  render() {
    return (
      <div className="board-filters">
        <span className="label">Ordenar:</span>
        {[ SHOW_RECENTS, SHOW_OLDERS ].map(item =>
          this.renderButtons(item)
        )}              
      </div>
    )
  }
}
