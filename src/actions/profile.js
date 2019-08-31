import axios from "axios";
import { GET_PROFILE, PROFILE_ERROR } from "./types";

//get current users profile
export const getCurrentProfile = userId => async dispatch => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/user/profile/me/${userId}`
    );

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
    console.log(res, "profile data");
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
