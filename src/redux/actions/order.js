import { instance } from "./instance";
import { GET_ALL_ORDERS, CLEAR_ORDERS } from "./actionTypes";

export const getOrders = () => {
  return async dispatch => {
    try {
      const res = await instance.get("api/orders");
      const orders = res.data;
      dispatch({
        type: GET_ALL_ORDERS,
        payload: orders,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const clearOrders = () => ({ type: CLEAR_ORDERS });
