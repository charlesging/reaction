export default function actionsReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_CARD_SUCCESS":
      return state
        .filter(cardAction => {
          return cardAction.card_id !== action.card.id;
        })
        .concat(action.card.actions);
    case "UPDATE_CARD_SUCCESS":
      return state
        .filter(cardAction => {
          return cardAction.card_id !== action.card.id;
        })
        .concat(action.card.actions);
    default:
      return state;
  }
}
