import { combineReducers } from "redux";
import { somereducer } from "./somereducer";

export const rootReducer = combineReducers({
  somereducer: somereducer
});
