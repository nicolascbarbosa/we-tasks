import React from 'react';
import PropTypes from 'prop-types';

import styles from './InputForm.scss';

export default class InputForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const value = global.document.getElementById('addTask').value.trim();
    if (value !== '') {
      this.props.onSubmit(value);
      this.setState({ value: '' });
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className={styles.boardForm}>
        <form onSubmit={this.handleSubmit}>
          <input
            id="addTask"
            className={styles.control}
            type="text"
            placeholder="Adicione uma Tarefa ao TODO"
            value={this.state.value}
            onBlur={this.handleSubmit}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
