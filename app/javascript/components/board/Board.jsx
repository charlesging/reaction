import React, { Component } from "react";
import BoardHeader from "./BoardHeader";
import ListContainer from "./ListContainer";

class Board extends Component {
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
