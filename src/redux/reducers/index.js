import { combineReducers } from "redux";

// Reducers
import userReducer from "./user";
import errorReducer from "./errors";
import categoryReducer from "./category";
import itemReducer from "./item";
import cartReducer from "./cart";
import orderReducer from "./order";

export default combineReducers({
  userState: userReducer,
  errorsState: errorReducer,
  categoryState: categoryReducer,
  itemState: itemReducer,
  cartState: cartReducer,
  orderState: orderReducer,
});
