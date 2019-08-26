import axios from "axios";
//actions

import { AUTH_SIGN_UP } from "./types";

export const authGoogle = data => {
  return async dispatch => {
    console.log("we received", data);
    const res = await axios.post("http://localhost:5000/api/auth/google", {
      access_token: data
    });

    dispatch({
      type: AUTH_SIGN_UP,
      payload: res.data.token
    });

    console.log("res", res);
    localStorage.setItem("JWT_TOKEN", res.data.token);
  };
};

export const authFacebook = data => {
  return async dispatch => {
    console.log("we received", data);
    const res = await axios.post("http://localhost:5000/api/auth/facebook", {
      access_token: data
    });

    dispatch({
      type: AUTH_SIGN_UP,
      payload: res.data.token
    });

    console.log("res", res);
    localStorage.setItem("JWT_TOKEN", res.data.token);
  };
};
