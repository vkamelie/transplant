import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import axios from "axios";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
// const jwtToken = localStorage.getItem("JWT_TOKEN");
// axios.defaults.headers.common["Authorization"] = jwtToken;

const initialState = {
  // auth: {
  //   token: jwtToken,
  //   isAuthenticated: jwtToken ? true : false
  // }
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
