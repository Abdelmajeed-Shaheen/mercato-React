import { GET_ALL_ITEMS, FILTER_ITEMS } from "../actions/actionTypes";

const initialState = {
  items: [],
  filtereditems: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_ITEMS:
      const items = payload;
      return {
        ...state,
        items: items,
        filtereditems: items,
      };
    case FILTER_ITEMS:
      let filterItems = state.items;
      if (payload.category) {
        filterItems = filterItems.filter(
          (item) => item.category.name === payload.category
        );
      }
      if (payload.subcat) {
        filterItems = filterItems.filter(
          (item) => item.sub_category.name === payload.subcat
        );
      }
      return {
        ...state,
        filtereditems: filterItems,
      };
    default:
      return state;
  }
};

export default reducer;
