import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED } from '../constants/TodoFilters'

const FILTER_TITLES = {
  [SHOW_ALL]: 'Todas',
  [SHOW_COMPLETED]: 'Completadas'
}

export default class BoardPreview extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onShow: PropTypes.func.isRequired
  }


  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    const { filter: selectedFilter, onShow } = this.props

    return (
      <button key={filter} className="btn-views -selected" 
              type="button"
              className={classnames(
                'btn-views', { 
                  selected : filter === selectedFilter 
                })}
                onClick={() => onShow(filter)}
      >
        {title}
      </button>  
    )
  }


  render() {
    return (
      <div className="board-preview">
        <span className="label">Visualização:</span>        
        {[ SHOW_ALL, SHOW_COMPLETED ].map(filter =>
          this.renderFilterLink(filter)
        )}  
      </div>  

    )
  }
}
