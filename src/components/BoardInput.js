import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BoardInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    newTodo: PropTypes.bool.isRequired,
    text: PropTypes.string
  }

  static defaultProps = {
    text: ''
  }

  state = {
    text: this.props.text || ''
  }

  handleSubmit = (e) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleBlur = (e) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <div className="board-form">
        <input
          className="control"
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.text}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
      </div>
    );
  }
}
