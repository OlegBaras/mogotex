import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "../components/css/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-description">
        <h1 className="home-title">
          UAB MOGO<span>TEX</span> BALTIC
        </h1>
        <FormattedMessage id="about-message" />

        {/* <div className="home-cta-container">
          <button>
            <FormattedMessage id="fabrics" />
          </button>
          <button>
            <FormattedMessage id="contacts" />
          </button>
        </div> */}

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

// old <About /> css
/*
.about {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 40%;
  }
  
  .about-text {
    line-height: 3rem;
  }
*/
