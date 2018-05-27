import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

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
    const { currentOrderVisibility } = this.props;
    return (
      <div className={styles.filters}>
        <span className={styles.label}>Ordenar:</span>
        <button
          className={cn(styles.btnFilter, {
            [styles.selected]: currentOrderVisibility === ORDER_RECENT,
          })}
          onClick={() => this.handleShowOrder(ORDER_RECENT)}
        >
          Mais Recentes
        </button>
        <button
          className={cn(styles.btnFilter, {
            [styles.selected]: currentOrderVisibility === ORDER_OLD,
          })}
          onClick={() => this.handleShowOrder(ORDER_OLD)}
        >
          Mais Antigas
        </button>
      </div>
    );
  }
}
