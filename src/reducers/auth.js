//reducer
import {
  AUTH_SIGN_UP,
  AUTH_SIGN_OUT,
  AUTH_SIGN_IN,
  AUTH_ERROR
} from "../actions/types";

const initialState = {
  isAuthenticated: false,

  errorMessage: ""
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_SIGN_UP:
      return { ...state, isAuthenticated: true, errorMessage: "" };
    case AUTH_SIGN_IN:
      return { ...state, isAuthenticated: true, errorMessage: "" };
    case AUTH_SIGN_OUT:
      return { ...state, isAuthenticated: false, errorMessage: "" };
    case AUTH_ERROR:
      return { ...state, errorMessage: payload };
    default:
      return state;
  }
};
