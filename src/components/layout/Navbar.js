import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/ts2logo.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <ul className="navbar-logo">
        <li>
          <Link to="landing.html">
            <img src={Logo} alt="Logo" />
          </Link>
        </li>
        <li className="hide-sm">
          <Link to="/landing">Transplant Support</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};
export default connect(
  mapStateToProps,
  null
)(Navbar);
