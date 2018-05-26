import { connect } from 'react-redux';

import * as actionCreators from './actions';

import Board from './Board';

const mapStateToProps = state => ({
  tasks: state.todos.board,
});

export default connect(mapStateToProps, actionCreators)(Board);
