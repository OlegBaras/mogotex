import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">UAB MOGOTEX BALTIC</h1>
      <ul className="home-links">
        <Link to="/about">
          <li>
            <FormattedMessage id="about" />
          </li>
        </Link>
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
  );
}

export default Home;
