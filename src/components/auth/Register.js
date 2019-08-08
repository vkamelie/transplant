import React from "react";
import GoogleLogin from "react-google-login";
// import facebookLogin from "react-facebook-login";

const Register = () => {
  const responseGoogle = res => {
    console.log(res, "google");
  };

  // const responseFacebook = res => {
  //   console.log(res);
  // };

  return (
    <div>
      <GoogleLogin
        clientId="734552449617-5c8f2v9griquvcflofvasmpkp1me5o8p.apps.googleusercontent.com"
        buttonText="Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        className="btn"
      />
    </div>
  );
};

export default Register;
