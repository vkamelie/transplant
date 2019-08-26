import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { authGoogle, authFacebook } from "../../actions/auth";
import PropTypes from "prop-types";

// const Login = ({ oauthGoogle, isAuthenticated }) => {
const Login = ({ authGoogle, authFacebook, isAuthenticated }) => {
  const responseGoogle = async res => {
    console.log("Google res", res);
    await authGoogle(res.accessToken);

    // if (isAuthenticated) {
    //   return <Redirect to="/profile" />;
    // }
  };

  const responseFacebook = async res => {
    console.log("Facebook res", res);
    await authFacebook(res.accessToken);
  };

  if (isAuthenticated) {
    return <Redirect to="/profile" />;
  }
  return (
    <section className="container">
      <h1 className="large text-primary">Login</h1>
      <p className="lead">
        <i className="fas fa-user" /> Get Started with
      </p>
      <FacebookLogin
        appId="598575540670547"
        textButton="Facebook"
        fields="first_name, picture"
        callback={responseFacebook}
        // cssClass="btn"
      />

      <GoogleLogin
        clientId="734552449617-tvjl20unso8rsnr4tl3hts4ndgb42tbb.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        // className="btn"
      />
    </section>
  );
};
Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  authGoogle: PropTypes.func.isRequired,
  authFacebook: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { authGoogle, authFacebook }
)(Login);
