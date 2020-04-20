import { instance } from "./instance";
import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  EMPTY_CART,
  CHECKOUT,
} from "./actionTypes";
import { getAllItems } from "./Item";

export const addCartItem = (item, quantity) => {
  const cartitem = { item: item, quantity: quantity };
  return {
    type: ADD_CART_ITEM,
    payload: cartitem,
  };
};

export const removeCartItem = item => {
  return {
    type: REMOVE_CART_ITEM,
    payload: item,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};

export const checkout = () => {
  return async dispatch => {
    try {
      const name = "cart";
      const cart = { cart: localStorage.getItem("cart") };

      const res = await instance.post("api/addorder/", cart);
      dispatch(emptyCart());
      dispatch(getAllItems());
      // history.replace("/home");
    } catch (err) {
      console.error(err);
    }
  };
};
