import { GET_ALL_ITEMS } from "../actions/actionTypes";

const initialState = {
  items: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_ITEMS:
      const items = payload;
      return {
        ...state,
        items: items,
      };
    default:
      return state;
  }
};

export default reducer;
