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
  } else if (action.type === "CREATE_LIST_SUCCESS") {
    return state.concat(action.list);
  } else if (action.type === "UPDATE_LIST_SUCCESS") {
    const filteredLists = state.map(list => {
      if (list.id === action.list.id) {
        return Object.assign({}, list, { title: action.list.title });
      } else {
        return list;
      }
    });
    return filteredLists;
  } else {
    return state;
  }
}
