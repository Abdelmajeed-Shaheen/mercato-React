import jwt_decode from "jwt-decode";

import { instance } from "./instance";
import { SET_CURRENT_USER, SET_ERRORS } from "./actionTypes";

export const checkForExpiredToken = () => {
  return (dispatch) => {
    // Check for token expiration
    const token = localStorage.getItem("token");

    if (token) {
      const currentTimeInSeconds = Date.now() / 1000;

      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTimeInSeconds) {
        // Set user
        dispatch(setCurrentUser(token));
      } else {
        return logout();
      }
    }
  };
};

export const login = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("api/login", userData);
      const user = res.data;
      dispatch(setCurrentUser(user.access));
      history.replace("/private");
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    }
  };
};

export const signup = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("api/register", userData);
      const user = res.data;
      dispatch(setCurrentUser(user.tokens.access));
      history.replace("/private");
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    }
  };
};

const setCurrentUser = (token) => {
  return async (dispatch) => {
    let user = null;
    if (token) {
      localStorage.setItem("token", token);

      instance.defaults.headers.common.Authorization = `jwt ${token}`;
      user = jwt_decode(token);
      console.log(user);
      // dispatch(fetchAllChannels());
    } else {
      localStorage.clear();
      delete instance.defaults.headers.common.Authorization;
    }
    dispatch({
      type: SET_CURRENT_USER,
      payload: user,
    });
    dispatch({
      type: SET_ERRORS,
      payload: null,
    });
  };
};

export const logout = () => {
  return setCurrentUser();
};
