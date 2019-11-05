import React from "react";
import { connect } from "react-redux";
import Board from "./Board";
import { fetchBoard } from "../../actions/BoardActions";

const mapStateToProps = (state, ownProps) => {
  let currentBoard;
  // if NOTHING in state, and we're not at /boards/,
  // board is `null`
  if (/cards/g.test(ownProps.match.url)) {
    const currentCard = state.cards.find(card => {
      return card.id === +ownProps.match.params.id;
    });

    currentBoard = state.boards.find(board => {
      return board.id === currentCard.board_id;
    });
  } else {
    currentBoard = state.boards.find(board => {
      return board.id === +ownProps.match.params.id;
    });
  }

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
