import React from "react";
import { FormattedMessage } from "react-intl";
import "./css/About.css";

function About() {
  return (
    <div className="about">
      <p className="about-text">
        <FormattedMessage id="about-message" />
      </p>
    </div>
  );
}
export default About;
