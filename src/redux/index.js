import { combineReducers } from "redux";
import { reducer as accReducer } from "./accounts/reducer";

const reducers = combineReducers({
  accounts: accReducer,
});

export default reducers;
