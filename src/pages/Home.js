import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "../components/css/Home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">
        UAB MOGO<span>TEX</span> BALTIC
      </h1>
      <div className="home-text">
        <FormattedMessage id="about-message" />
      </div>

      <div className="home-cta-container">
        <Link to="/fabrics">
          <button className="home-cta-button">
            <FormattedMessage id="fabrics" />
          </button>
        </Link>
        <Link to="/contacts">
          <button className="home-cta-button">
            <FormattedMessage id="contacts" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
