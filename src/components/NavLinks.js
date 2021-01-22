import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";

function NavLinks() {
  return (
    <>
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
    </>
  );
}

export default NavLinks;
