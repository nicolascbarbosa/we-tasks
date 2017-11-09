import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED } from '../constants/TodoPreviews'

const FILTER_TITLES = {
  [SHOW_ALL]: 'Todas',
  [SHOW_COMPLETED]: 'Completadas'
}

export default class BoardPreview extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onShow: PropTypes.func.isRequired
  }

  renderButtons(item) {
    const title = FILTER_TITLES[item]
    const { filter: selectedFilter, onShow } = this.props
    
    return (
      <button key={item} className="btn-views -selected" 
              type="button"
              className={classnames(
                'btn-views', { 
                  '-selected' : item === selectedFilter 
                })}
                onClick={() => onShow(item)}
      >
        {title}
      </button>  
    )
  }


  render() {
    return (
      <div className="board-preview">
        <span className="label">Visualização:</span>        
        {[ SHOW_ALL, SHOW_COMPLETED ].map(item =>
          this.renderButtons(item)
        )}  
      </div>  

    )
  }
}
