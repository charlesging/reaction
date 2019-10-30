import React from "react";
import { connect } from "react-redux";
import Board from "./Board";
import { fetchBoard } from "../../actions/BoardActions";

const mapStateToProps = (state, ownProps) => {
  const currentBoard = state.boards.find(board => {
    return board.id === +ownProps.match.params.id;
  });

  return {
    board: currentBoard
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchBoard: () => {
      dispatch(fetchBoard(+ownProps.match.params.id));
    }
  };
};

class BoardContainer extends React.Component {
  componentDidMount() {
    this.props.onFetchBoard();
  }

  render() {
    if (this.props.board) {
      return <Board board={this.props.board} />;
    } else {
      return <h1>No board found</h1>;
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);
