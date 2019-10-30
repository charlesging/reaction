export default function listsReducer(state = [], action) {
  if (action.type === "FETCH_BOARD_SUCCESS") {
    const { lists, ...newBoardWithoutLists } = action.board;
    const filteredLists = state.filter(list => {
      list.board_id !== action.board.id;
    });
    const listsWithoutCards = lists.map(list => {
      const { cards, ...listWithoutCards } = list;
      return listWithoutCards;
    });
    return filteredLists.concat(listsWithoutCards);
  } else {
    return state;
  }
}

// export default function boardsReducer(state = [], action) {
//   if (action.type === 'FETCH_BOARDS_SUCCESS') {
//     return action.boards;
//   } else if (action.type === 'CREATE_BOARD_SUCCESS') {
//     const newBoard = action.board;
//     newBoard.id = Number(newBoard.id);

//     return state.concat(newBoard);
//   } else if (action.type === 'FETCH_BOARD_SUCCESS') {
//     const excludedBoards = state.filter(board => board.id !== action.board.id);
//     const { lists, ...newBoardWithoutLists } = action.board;

//     return excludedBoards.concat(newBoardWithoutLists);
//   } else {
//     return state;
//   }
// }
