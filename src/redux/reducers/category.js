import { GET_CATEGORIES } from "../actions/actionTypes";

const initialState = {
  categories: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORIES:
      const categories = payload;
      return {
        ...state,
        categories: categories,
      };
    default:
      return state;
  }
};

export default reducer;
