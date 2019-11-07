import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createCommentRequest() {
  return { type: types.CREATE_COMMENT_REQUEST };
}
export function createCommentSuccess(comment) {
  return { type: types.CREATE_COMMENT_SUCCESS, comment: comment };
}

export function createComment(cardId, data, callback) {
  return function(dispatch) {
    dispatch(createCommentRequest());
    apiClient.createComment(cardId, data, newComment => {
      dispatch(createCommentSuccess(newComment));

      if (callback) callback(newComment);
    });
  };
}
