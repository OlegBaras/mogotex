import React from "react";
import { FormattedMessage } from "react-intl";
import "./css/Contacts.css";

function Contacts() {
  return (
    <div className="contacts">
      <div className="text-holder">
        <div className="contacts-header">
          <FormattedMessage id="contacts" />
        </div>
        <div className="contacts-details">
          <p>Phone Number: +370 5 250 5405</p>
          <p>Fax : +370 5 249 7087</p>
          <p>Mobile : +370 685 59789</p>
          <p>Email address: mogotexbaltic@mogotexbaltic.lt</p>
          <p>WHOLESALE OF FABRICS</p>
        </div>
      </div>
      <div className="map-holder">
        <div className="map">MAP</div>
      </div>
    </div>
  );
}

export default Contacts;
