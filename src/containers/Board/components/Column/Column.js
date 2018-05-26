import React from 'react';
import PropTypes from 'prop-types';

import styles from './Column.scss';

const Column = ({ children }) => <div className={styles.column}>{children}</div>;

Column.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Column;
