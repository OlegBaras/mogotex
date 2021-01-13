import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import About from "../components/About";
import "../components/css/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-description">
        <h1 className="home-title">
          UAB MOGO<span>TEX</span> BALTIC
        </h1>
        <About />
        <ul className="home-links">
          <Link to="/fabrics">
            <li>
              <FormattedMessage id="fabrics" />
            </li>
          </Link>
          <Link to="/contacts">
            <li>
              <FormattedMessage id="contacts" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Home;