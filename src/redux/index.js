import { combineReducers } from "redux";
import { moneyReducer } from "./moneyTransform/moneyReducer";

const reducers = combineReducers({
  moneyTransform: moneyReducer,
});

export default reducers;
