import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";

export default function NavLogo() {
  return (
    <div className="NavLogo">
      <Link to="/">
        <img src={logo} alt="mogotex logo" />
      </Link>
    </div>
  );
}
