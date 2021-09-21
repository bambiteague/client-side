import { combineReducers } from "redux";
import postReducer from "./postReducer";
import postFormReducer from "./postFormReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  userReducer,
  postReducer,
  postFormReducer,
  
});
