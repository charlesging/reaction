import React from "react";
import { connect } from "react-redux";
import Board from "./Board";
import { fetchBoard } from "../../actions/BoardActions";

const mapStateToProps = (state, ownProps) => {
  let currentBoard;
  // if NOTHING in state, and we're not at /boards/,
  // board is `null`

  //   currentBoard = state.boards.find(board => {
  //     return board.id === currentCard.board_id;
  //   });
  // } else {
  // currentBoard = state.boards.find(board => {
  //   return board.id === +ownProps.match.params.id;
  // });
  // }

  // return {
  //   board: currentBoard
  // };
  return { state };
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
        // console.log("BOARD : ", board);
        console.log("BOARD ID : ", board.id === boardId);
        return board.id === boardId;
      }),
      onFetchBoard: () => {
        dispatchProps.dispatch(fetchBoard(boardId));
      }
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // onFetchBoard: () => {
    //   dispatch(fetchBoard(+ownProps.match.params.id));
    // }
    dispatch: dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Board);
