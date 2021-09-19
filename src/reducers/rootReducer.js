import { combineReducers } from "redux";
import postReducer from "./postReducer";
import postFormReducer from "./postFormReducer"

export const rootReducer = combineReducers({
  postReducer,
  postFormReducer,
});
