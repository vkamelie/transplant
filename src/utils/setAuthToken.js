import axios from "axios";
// const JWT_TOKEN = localStorage.getItem("JWT_TOKEN");

const setAuthToken = JWT_TOKEN => {
  if (JWT_TOKEN) {
    axios.defaults.headers.common["Authorization"] = JWT_TOKEN;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;

// const jwtToken = localStorage.getItem("JWT_TOKEN");
// axios.defaults.headers.common["Authorization"] = jwtToken;
