import React from 'react';
import PropTypes from 'prop-types';

const CardItem = ({ id, text, deleteCard }) => (
  <li className="">
    <span className="text">{text}</span>
    <button className="btn-card-action -delete" onClick={() => deleteCard(id)}>
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
