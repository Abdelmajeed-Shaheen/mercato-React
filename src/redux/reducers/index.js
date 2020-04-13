import { combineReducers } from "redux";

// Reducers
import userReducer from "./user";
import errorReducer from "./errors";

export default combineReducers({
  userState: userReducer,
  errorsState: errorReducer,
});
