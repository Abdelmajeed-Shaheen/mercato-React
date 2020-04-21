import { GET_ALL_ORDERS, CLEAR_ORDERS } from "../actions/actionTypes";

const initialState = {
  orders: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_ORDERS:
      return {
        ...state,
        orders: payload,
      };
    case CLEAR_ORDERS:
      return {
        ...state,
        orders: [],
      };
    default:
      return state;
  }
};

export default reducer;
