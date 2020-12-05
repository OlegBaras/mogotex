import React from "react";
import { FormattedMessage } from "react-intl";

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
