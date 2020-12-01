import React from "react";
import { FormattedMessage } from "react-intl";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./css/Contacts.css";

function Contacts() {
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };
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
        <div className="map">
          <LoadScript API_KEY="AIzaSyBMNuT9AKH7VZ2KlnrAIjr29G5kQChhnYQ">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Contacts);
