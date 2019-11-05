export default function cardsReducer(state = [], action) {
  if (action.type === "FETCH_BOARD_SUCCESS") {
    const boardLists = action.board.lists;
    const boardId = action.board.id;

    let allBoardCards = [];
    boardLists.forEach(list => {
      allBoardCards = allBoardCards.concat(list.cards);
    });

    const filteredCards = state.filter(card => {
      // cards that DONT belong to board
      return card.board_id !== boardId;
    });

    return filteredCards.concat(allBoardCards);
  } else if (action.type === "CREATE_CARD_SUCCESS") {
    return state.concat(action.card);
  } else if (action.type === "FETCH_CARD_SUCCESS") {
    return state.concat(action.card);
  } else {
    return state;
  }
}
