import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

import styles from './CardItem.scss';

const cardSource = {
  beginDrag(props) {
    const { id, text, dragDataKey } = props;
    return {
      id,
      text,
      dragDataKey,
    };
  },
};

function collect(connect) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
  };
}

const CardItem = ({
  id, text, deleteCard, connectDragPreview, connectDragSource,
}) =>
  connectDragSource(connectDragPreview(<li className={styles.cardItem}>
    <span className={styles.text}>{text}</span>
    <button className={styles.btnDeleteCard} onClick={() => deleteCard(id)}>
          Excluir
    </button>
                                       </li>));

CardItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  deleteCard: PropTypes.func.isRequired,
  dragDataKey: PropTypes.string.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
};

export default DragSource('card', cardSource, collect)(CardItem);
