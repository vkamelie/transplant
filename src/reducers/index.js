import { combineReducers } from "redux";
import authReducer from "./auth";
import alert from "./alert";

export default combineReducers({
  auth: authReducer,
  alert
});
