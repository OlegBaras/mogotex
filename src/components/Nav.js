import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";
// import logo from "../logo1.svg";
import "./css/Nav.css";

function Nav() {
  const navStyle = {
    // color: "white",
  };

  return (
    <nav>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>
            <FormattedMessage id="nav-home" />
          </li>
        </Link>
        {/* <Link style={navStyle} to="/about">
          <li>
            <FormattedMessage id="nav-about" />
          </li>
        </Link> */}
        <Link style={navStyle} to="/fabrics">
          <li>
            <FormattedMessage id="nav-fabrics" />
          </li>
        </Link>
        <Link style={navStyle} to="/contacts">
          <li>
            <FormattedMessage id="nav-contacts" />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
