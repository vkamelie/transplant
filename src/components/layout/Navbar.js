import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/ts2logo.png";

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
export default Navbar;
