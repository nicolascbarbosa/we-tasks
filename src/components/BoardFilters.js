import React, { Component } from 'react'

export default class BoardFilters extends Component {

  render() {
    return (
      <div className="board-filters">
        <span className="label">Ordenar:</span>
        <button className="btn-filter -selected" type="button">Mais Recentes</button>
        <button className="btn-filter" type="button">Mais Antigos</button>            
      </div>
    )
  }
}
