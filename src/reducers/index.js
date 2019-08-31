import { combineReducers } from "redux";
import authReducer from "./auth";
import alert from "./alert";
import profile from "./profile";

export default combineReducers({
  auth: authReducer,
  alert,
  profile
});
