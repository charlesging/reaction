export function createComment(cardId, data, callback) {
  return function(dispatch) {
    dispatch(createCommentRequest());
    apiClient.createComment(cardId, data, newComment => {
      dispatch(createCommentSuccess(newComment));

      if (callback) callback(newComment);
    });
  };
}
