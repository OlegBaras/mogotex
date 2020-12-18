import React from "react";
import { FormattedMessage } from "react-intl";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
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

  const { isLoaded, loadError } = useLoadScript({
    API_KEY: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return "Error laoding maps";
  if (!isLoaded) return "Loading Maps";
  // const GOOGLE_API_KEY = `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
  // console.log({ GOOGLE_API_KEY });

  return (
    <div className="contacts">
      <div className="text-holder">
        {/* <div className="contacts-header">
          <FormattedMessage id="contacts" />
        </div> */}
        <div className="contacts-details">
          <p>
            <FormattedMessage id="PhoneNumber" /> : +370 5 250 5405
          </p>
          <p>
            <FormattedMessage id="Fax" /> : +370 5 249 7087
          </p>
          <p>
            <FormattedMessage id="Mobile" /> : +370 685 59789
          </p>
          <p>
            <FormattedMessage id="Email" />: mogotexbaltic@mogotexbaltic.lt
          </p>
          <p>
            <FormattedMessage id="Wholesale" />
          </p>
        </div>
      </div>
      <div className="map-holder">
        <div className="map">
          {/* <LoadScript API_KEY="{GOOGLE_API_KEY}"> */}
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <Marker
              position={{ lat: 54.66853, lng: 25.25308 }}
              label={"Mogotex Baltic"}
            />
          </GoogleMap>
          {/* </LoadScript> */}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Contacts);
