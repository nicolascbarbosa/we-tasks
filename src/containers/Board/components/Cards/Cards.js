import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

import { dispatch } from 'Store';

import { moveItem } from '../../actions';

import styles from './Cards.scss';

const cardTarget = {
  drop(props, monitor) {
    if (monitor.didDrop()) {
      return;
    }
    const source = monitor.getItem();

    if (props.dropDataKey !== source.dragDataKey) {
      return;
    }

    dispatch(moveItem(source));
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

class Cards extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    dropDataKey: PropTypes.string.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
  };

  render() {
    const { children, connectDropTarget } = this.props;
    return connectDropTarget(<ul className={styles.cards}>{children}</ul>);
  }
}

export default DropTarget('card', cardTarget, collect)(Cards);
