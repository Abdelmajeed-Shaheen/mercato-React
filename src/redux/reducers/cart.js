import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  EMPTY_CART,
} from "../actions/actionTypes";
const initialState = {
  cartitems: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CART_ITEM:
      const newitem = payload;
      const previtem = state.cartitems.find(
        cartitem => cartitem.item.id === newitem.item.id
      );
      if (previtem) {
        const newcart = state.cartitems.map(cartitem =>
          cartitem === previtem
            ? {
                item: cartitem.item,
                quantity: cartitem.quantity + newitem.quantity,
              }
            : cartitem
        );
        localStorage.setItem("cart", JSON.stringify(newcart));
        return { ...state, cartitems: newcart };
      } else {
        const cart = [newitem, ...state.cartitems];
        localStorage.setItem("cart", JSON.stringify(cart));
        return {
          ...state,
          cartitems: [...cart],
        };
      }
    case REMOVE_CART_ITEM:
      const deletedcart = state.cartitems.filter(item => item !== payload);
      localStorage.setItem("cart", JSON.stringify(deletedcart));
      return {
        ...state,
        cartitems: deletedcart,
      };
    case EMPTY_CART:
      localStorage.removeItem("cart");
      return {
        ...state,
        cartitems: [],
      };
    default:
      return state;
  }
};

export default reducer;
