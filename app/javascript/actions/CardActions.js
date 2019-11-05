import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createCardRequest() {
  return { type: types.CREATE_CARD_REQUEST };
}
export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card: card };
}

export function fetchCardRequest() {
  return { type: types.FETCH_CARD_REQUEST };
}
export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, card: card };
}

export function createCard(card, listId, callback) {
  return function(dispatch) {
    dispatch(createCardRequest());
    apiClient.createCard(card, listId, newCard => {
      dispatch(createCardSuccess(newCard));

      if (callback) {
        callback(newCard);
      }
    });
  };
}

export function fetchCard(cardId) {
  return function(dispatch) {
    dispatch(fetchCardRequest());
    apiClient.getCard(cardId, card => {
      dispatch(fetchCardSuccess(card));
    });
  };
}
