import { ActionTypes } from "./types";

export const addAccount = (payload) => {
  return {
    type: ActionTypes.ADD_ACCOUNT,
    payload,
  };
};
export const addTransaction = (payload) => {
  return {
    type: ActionTypes.ADD_TRANSACTION,
    payload,
  };
};

export const deleteAccount = (payload) => {
  return {
    type: ActionTypes.DELETE_ACCOUNT,
    payload,
  };
};
export const deleteTransaction = (payload) => {
  return {
    type: ActionTypes.DELETE_TRANSACTION,
    payload,
  };
};
