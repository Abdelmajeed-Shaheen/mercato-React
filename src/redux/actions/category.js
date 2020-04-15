import { GET_CATEGORIES } from "./actionTypes";
import { instance } from "./instance";

export const fetchAllCategories = () => {
  return async (dispatch) => {
    try {
      const res = await instance.post("api/categories");
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
