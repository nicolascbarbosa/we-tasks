import React from 'react';
import PropTypes from 'prop-types';

import styles from './CardItem.scss';

const CardItem = ({ id, text, deleteCard }) => (
  <li className={styles.cardItem}>
    <span className={styles.text}>{text}</span>
    <button className={styles.btnDeleteCard} onClick={() => deleteCard(id)}>
      Excluir
    </button>
  </li>
);

CardItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default CardItem;
