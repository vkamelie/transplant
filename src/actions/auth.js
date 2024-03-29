import axios from "axios";
//actions

import { AUTH_SIGN_UP, LOGOUT } from "./types";

//import setAuthToken from "../utils/setAuthToken";

// export const loadUser = () => async dispatch => {
//   if (localStorage.JWT_TOKEN) {
//     setAuthToken(localStorage.JWT_TOKEN);
//   }
//   try {
//     const res = await axios.get("http://localhost:5000/api/user/profile/me");
//     dispatch({
//       type: USER_LOADED,
//       payload: res.data
//     });
//     console.log(res.data, "USER LOADED");
//   } catch (err) {
//     console.error(err);
//   }
// };

export const authGoogle = data => {
  return async dispatch => {
    console.log("we received", data);
    const res = await axios.post(
      "http://localhost:5000/api/auth/google",

      {
        access_token: data
      }
    );

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

export const getSecret = () => {
  return async dispatch => {
    try {
      console.log("[ACtion creator] Trying to get backend");
      const res = await axios.get("http://localhost:5000/api/auth/secret");
      console.log("res", res);
    } catch (err) {
      console.error("err", err);
    }
  };
};

//LOGOUT
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
