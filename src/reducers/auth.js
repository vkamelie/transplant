//reducer
import { AUTH_SIGN_UP } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  token: "",
  user: null,
  loading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_SIGN_UP:
      return { ...state, ...payload, isAuthenticated: true, loading: false };

    default:
      return state;
  }
};
