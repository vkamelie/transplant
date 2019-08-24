import axios from "axios";
//actions

import { AUTH_SIGN_UP } from "./types";

export const oauthGoogle = data => {
  return async dispatch => {
    console.log("we received data", data);
    const res = await axios("http://localhost:5000/api/auth/google");
    dispatch({
      type: AUTH_SIGN_UP,
      payload: res.data.token
    });
    console.log(res);
    localStorage.setItem("JWT_TOKEN", res.data.token);
  };
};

export const oauthFacebook = data => {
  return async dispatch => {
    const res = await axios.get("http://localhost:5000/api/auth/facebook", {
      access_token: data
    });

    dispatch({
      type: AUTH_SIGN_UP
    });
    console.log(res, "facebook res");
  };
};
