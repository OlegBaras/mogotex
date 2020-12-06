import React from "react";
import { FormattedMessage } from "react-intl";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./css/Contacts.css";

function Contacts() {
  const containerStyle = {
    width: "100%",
    height: "80%",
  };

  const center = {
    lat: 54.66853,
    lng: 25.25308,
  };

  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  console.log({ GOOGLE_API_KEY });
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
          <LoadScript API_KEY={GOOGLE_API_KEY}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={16}
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
