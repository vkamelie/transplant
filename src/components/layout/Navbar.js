import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/ts2logo.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/resources">Resources</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>

      <li>
        <a onClick={logout} href="#!">
          {" "}
          Log out
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
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
  );

  return (
    <nav className="navbar bg-dark">
      <ul className="navbar-logo">
        <li>
          <Link to="/landing">
            <img src={Logo} alt="Logo" />
          </Link>
        </li>
        <li className="hide-sm">
          <Link to="/landing">Transplant Support</Link>
        </li>
      </ul>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
