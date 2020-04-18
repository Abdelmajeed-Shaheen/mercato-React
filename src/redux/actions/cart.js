import { instance } from "./instance";
import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  EMPTY_CART,
  CHECKOUT,
} from "./actionTypes";

export const addCartItem = (item, quantity) => {
  const cartitem = { item: item, quantity: quantity };
  return {
    type: ADD_CART_ITEM,
    payload: cartitem,
  };
};

export const removeCartItem = (item) => {
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
