import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";

function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <img src={logo} alt=""/>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Titulinis</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>Apie mus</li>
        </Link>
        <Link style={navStyle} to="/fabrics">
          <li>Audiniai</li>
        </Link>
        <Link style={navStyle} to="/work-clothes">
          <li>Darbo Rūbams</li>
        </Link>
        <Link style={navStyle} to="/table-cloths">
          <li>Staltiesiniai</li>
        </Link>
        <Link style={navStyle} to="/contacts">
          <li>Kontaktai</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
