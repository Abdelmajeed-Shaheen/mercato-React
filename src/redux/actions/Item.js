import { GET_ALL_ITEMS } from "./actionTypes";
import { instance } from "./instance";

export const getAllItems = () => {
  return async (dispatch) => {
    try {
      const res = await instance.post("api/items");
      dispatch({
        type: GET_ALL_ITEMS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
