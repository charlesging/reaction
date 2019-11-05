import React, { Component } from "react";
import BoardHeader from "./BoardHeader";
import ListContainer from "./ListContainer";

class Board extends Component {
  componentDidMount() {
    console.log("IN MOUNT");
    if (this.props.onFetchBoard) {
      this.props.onFetchBoard();
    }
  }

  componentDidUpdate() {
    if (this.props.onFetchBoard && !this.props.board) {
      console.log("IN UPDATE ", this.props.board);
      this.props.onFetchBoard();
    }
  }

  render() {
    if (this.props.board) {
      return (
        <div>
          <BoardHeader title={this.props.board.title} />
          <main>
            <ListContainer boardId={this.props.board.id} />
          </main>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Board;
