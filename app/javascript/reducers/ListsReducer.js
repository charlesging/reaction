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
