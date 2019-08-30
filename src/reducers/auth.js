//reducer
import { AUTH_SIGN_UP, LOGOUT, USER_LOADED } from "../actions/types";

const initialState = {
  isAuthenticated: localStorage.getItem("JWT_TOKEN") ? true : false,
  loading: true,
  user: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case AUTH_SIGN_UP:
      console.log(localStorage);
      localStorage.setItem("JWT_TOKEN", payload.token);
      return { ...state, ...payload, isAuthenticated: true, loading: false };
    case LOGOUT:
      localStorage.removeItem("JWT_TOKEN");
      return {
        ...state,

        isAuthenticated: false,
        loading: false
      };

    default:
      return state;
  }
};
