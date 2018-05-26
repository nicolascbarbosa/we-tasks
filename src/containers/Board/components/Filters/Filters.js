import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ORDER_RECENT, ORDER_OLD } from '../../constants';

import styles from './Filters.scss';

export default class Filters extends React.Component {
  static propTypes = {
    keyDataOrder: PropTypes.string.isRequired,
    currentOrderVisibility: PropTypes.string.isRequired,
    changeOrderVisibility: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleShowOrder = this.handleShowOrder.bind(this);
  }

  handleShowOrder(type) {
    const { keyDataOrder, currentOrderVisibility, changeOrderVisibility } = this.props;
    if (type !== currentOrderVisibility) {
      changeOrderVisibility(keyDataOrder, type);
    }
  }

  render() {
    return (
      <div className="board-filters">
        <span className="label">Ordenar:</span>
        <button onClick={() => this.handleShowOrder(ORDER_RECENT)}>Mais Recentes</button>
        <button onClick={() => this.handleShowOrder(ORDER_OLD)}>Mais Antigas</button>
      </div>
    );
  }
}
