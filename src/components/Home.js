import React from "react";
import { Link } from "react-router-dom";

function Home() {
  // const navStyle = {
  //   color: "white",
  // };
  return (
    <div className="home">
      <h1 className="home-title">UAB MOGOTEX BALTIC</h1>
      <ul className="home-links">
        <Link to="/about">
          <li> Apie Mus</li>
        </Link>
        <Link to="/fabrics">
          <li>Audiniai</li>
        </Link>
        <Link to="/contacts">
          <li>Kontaktai</li>
        </Link>
      </ul>
    </div>
  );
}

export default Home;
