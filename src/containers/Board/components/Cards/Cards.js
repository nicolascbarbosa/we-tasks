import React from 'react';
import PropTypes from 'prop-types';

import styles from './Cards.scss';

const Cards = ({ children }) => <ul className={styles.card}>{children}</ul>;

Cards.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Cards;
