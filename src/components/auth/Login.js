import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { oauthGoogle, oauthFacebook } from "../../actions/auth";
import PropTypes from "prop-types";

const Login = ({ oauthGoogle, isAuthenticated }) => {
  const responseGoogle = async res => {
    console.log(res, "Google res");
    await oauthGoogle(res.accessToken);
    if (isAuthenticated) {
      return <Redirect to="/profile" />;
    }
  };

  const responseFacebook = async res => {
    console.log(res, "Facebook res");
    await oauthFacebook(res.accessToken);
    if (isAuthenticated) {
      return <Redirect to="/profile" />;
    }
  };

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
        cssClass="loginBtn--facebook"
      />

      <GoogleLogin
        clientId="734552449617-tvjl20unso8rsnr4tl3hts4ndgb42tbb.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </section>
  );
};
Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  oauthGoogle: PropTypes.func.isRequired,
  oauthFacebook: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { oauthGoogle, oauthFacebook }
)(Login);
