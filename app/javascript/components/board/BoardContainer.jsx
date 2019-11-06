import React from "react";
import { connect } from "react-redux";
import Board from "./Board";
import { fetchBoard } from "../../actions/BoardActions";

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  let boardId;
  if (/cards/g.test(ownProps.match.url)) {
    const currentCard = stateProps.state.cards.find(card => {
      return card.id === +ownProps.match.params.id;
    });
    if (currentCard) {
      boardId = currentCard.board_id;
    } else {
      boardId = null;
    }
  } else {
    boardId = +ownProps.match.params.id;
  }

  if (!boardId) {
    return {
      board: null
    };
  } else {
    return {
      board: stateProps.state.boards.find(board => {
        return board.id === boardId;
      }),
      onFetchBoard: () => {
        dispatchProps.dispatch(fetchBoard(boardId));
      }
    };
  }
};

class BoardContainer extends React.Component {
  state = {
    requestSent: false
  };
  componentDidMount() {
    if (this.props.onFetchBoard) {
      this.props.onFetchBoard();
      this.setState({ requestSent: true });
    }
  }

  componentDidUpdate() {
    if (!this.state.requestSent) {
      this.props.onFetchBoard();
      this.setState({ requestSent: true });
    }
  }
  render() {
    return <Board board={this.props.board} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(BoardContainer);
