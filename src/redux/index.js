import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";
import {
  checkForExpiredToken,
  fetchAllCategories,
  getAllItems,
} from "./actions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(getAllItems());
store.dispatch(checkForExpiredToken());
store.dispatch(fetchAllCategories());

export default store;
