import { ActionTypes } from "./types";

const initialValues = [];

export const reducer = (state = initialValues, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_ACCOUNT:
      return [...state, payload];

    case ActionTypes.ADD_TRANSACTION:
      return [
        ...state.map((acc) => {
          if (acc.id === payload.id) {
            acc.transactions.unshift(payload.transaction);
            acc.amount +=
              payload.transaction.price *
              (payload.transaction.isInput ? 1 : -1);
          }
          return acc;
        }),
      ];

    case ActionTypes.DELETE_ACCOUNT:
      return [...state.filter((acc) => acc.id !== payload)];

    case ActionTypes.DELETE_TRANSACTION:
      return [
        ...state.map((acc) => {
          if (acc.id === payload.id) {
            const transaction = acc.transactions.find((t) => t.id === payload);
            acc.transactions = acc.transactions.filter((t) => t.id !== payload);
            acc.amount += transaction.price * (transaction.isInput ? -1 : 1);
          }
          return acc;
        }),
      ];

    default:
      return state;
  }
};
