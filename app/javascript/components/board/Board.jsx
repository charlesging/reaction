import React from "react";
import BoardHeader from "./BoardHeader";
import ListContainer from "./ListContainer";

const Board = ({ board }) => {
  return (
    <div>
      <BoardHeader title={board.title} />
      <main>
        <ListContainer boardId={board.id} />
      </main>
    </div>
  );
};

export default Board;
