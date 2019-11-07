export default function cardsReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_CARD_SUCCESS":
      const filteredComments = state.filter(comment => {
        // comments that DONT belong to board
        return comment.card_id !== action.card.id;
      });
      const { comments, ...newCardWithoutComments } = action.card;
      return filteredComments.concat(comments);
    case "CREATE_COMMENT_SUCCESS":
      return state.concat(action.comment);
    default:
      return state;
  }
}
