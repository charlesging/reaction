export default function cardsReducer(state = [], action) {
  let filteredCards;

  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      const boardLists = action.board.lists;
      const boardId = action.board.id;

      let allBoardCards = [];
      boardLists.forEach(list => {
        allBoardCards = allBoardCards.concat(list.cards);
      });

      filteredCards = state.filter(card => {
        // cards that DONT belong to board
        return card.board_id !== boardId;
      });

      return filteredCards.concat(allBoardCards);
    case "CREATE_CARD_SUCCESS":
      return state.concat(action.card);
    case "FETCH_CARD_SUCCESS":
      filteredCards = state.filter(card => {
        return card.id !== action.card.id;
      });

      const {
        comments,
        actions,
        ...newCardWithoutCommentsOrActions
      } = action.card;
      return filteredCards.concat(newCardWithoutCommentsOrActions);
    case "UPDATE_CARD_SUCCESS":
      const updatedCards = state.map(card => {
        if (card.id === action.card.id) {
          return Object.assign({}, card, action.card);
        } else {
          return card;
        }
      });
      return updatedCards;

    default:
      return state;
  }
}
