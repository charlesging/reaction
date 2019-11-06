import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list: list };
}

export function createList(list, boardId, callback) {
  return function(dispatch) {
    dispatch(createListRequest());
    apiClient.createList(list, boardId, newList => {
      dispatch(createListSuccess(newList));

      if (callback) {
        callback(newList);
      }
    });
  };
}

export function updateListSuccess(list) {
  return { type: types.UPDATE_LIST_SUCCESS, list: list };
}

export function updateListRequest() {
  return { type: types.UPDATE_LIST_REQUEST };
}

export function updateList(listId, data, callback) {
  return function(dispatch) {
    dispatch(updateListRequest());
    apiClient.updateList(listId, data, updatedlist => {
      dispatch(updateListSuccess(updatedlist));

      if (callback) {
        callback(updatedlist);
      }
    });
  };
}
