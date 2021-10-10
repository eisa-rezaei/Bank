import { ActionTypes } from "./action-types";

const moneyTransformInitialState = {
  transform: [
    {
      name: "فروش ارز ",
      time: "1400/06/15",
      cost: 4000000,
      isInput: true,
      bank: "Saderat",
      id: "abcsre",
    },
    {
      name: "تعمیر تلویزیون",
      time: "1400/03/12",
      cost: 1000000,
      isInput: false,
      bank: "Saderat",
      id: "adsfasdf",
    },
    {
      name: "حقوق ماهانه کار دوم",
      time: "1400/06/01",
      cost: 13000000,
      isInput: true,
      bank: "Saderat",
      id: "asldkfnkjsd",
    },
    {
      name: "تعمیر ماشین",
      time: "1400/07/14",
      cost: 120000,
      isInput: false,
      bank: "Melli",
      id: "iowejf",
    },
    {
      name: "حقوق ماهانه",
      time: "1400/07/01",
      cost: 13000000,
      isInput: true,
      bank: "Melli",
      id: "123adsf",
    },
    {
      name: "خرید مبل ",
      time: "1400/06/25",
      cost: 5000000,
      isInput: false,
      bank: "Melli",
      id: "2341dsfa",
    },
  ],
};

export const moneyReducer = (
  state = moneyTransformInitialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.ADD_BANK:
      return { ...state, transform: [...state.transform, payload] };
    case ActionTypes.Add_MONEYTRANSFORM:
      return { ...state, transform: [...state.transform, payload] };
    default:
      return state;
  }
};
