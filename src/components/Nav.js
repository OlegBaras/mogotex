import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";
import "./css/Nav.css";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/">
          <li>
            <FormattedMessage id="nav-home" />
          </li>
        </Link>
        <Link to="/fabrics">
          <li>
            <FormattedMessage id="nav-fabrics" />
          </li>
        </Link>
        <Link to="/contacts">
          <li>
            <FormattedMessage id="nav-contacts" />
          </li>
        </Link>
      </ul>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="mogotex logo" />
        </div>
      </Link>
    </nav>
  );
}

export default Nav;
