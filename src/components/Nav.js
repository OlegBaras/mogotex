import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";
// import logo from "../logo1.svg";
function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <Link style={navStyle} to="/">
        <img src={logo} alt="" />
      </Link>

      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>
            <FormattedMessage id="nav-home" />
          </li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>
            <FormattedMessage id="nav-about" />
          </li>
        </Link>
        <Link style={navStyle} to="/fabrics">
          <li>
            <FormattedMessage id="nav-fabrics" />
          </li>
        </Link>
        {/* <Link style={navStyle} to="/work-clothes">
          <li>
            <FormattedMessage id="nav-workClothes" />
          </li>
        </Link> */}
        {/* <Link style={navStyle} to="/table-cloths">
          <li>
            <FormattedMessage id="nav-tableCloths" />
          </li>
        </Link> */}
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
