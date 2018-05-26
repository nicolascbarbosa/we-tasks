import React from 'react';
import PropTypes from 'prop-types';

import styles from './Title.scss';

const Title = ({ title }) => <h2 className={styles.title}>{title}</h2>;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
