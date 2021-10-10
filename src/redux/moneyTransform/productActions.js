import { ActionTypes } from "./action-types";

export const addingBank = (products) => {
  return {
    type: ActionTypes.ADD_BANK,
    payload: products,
  };
};
export const buyingProduct = (products) => {
  return {
    type: ActionTypes.Add_MONEYTRANSFORM,
    payload: products,
  };
};
