import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import About from "./About";

function Home() {
  return (
    <div className="home">
      <div className="home-description">
        <h1 className="home-title">
          UAB MOGO<span>TEX</span> BALTIC
        </h1>
        <ul className="home-links">
          {/* <Link to="/about">
          <li>
            <FormattedMessage id="about" />
          </li>
        </Link> */}
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
        <About />
      </div>
      <div className="home-image">IMAGE</div>
    </div>
  );
}

export default Home;
