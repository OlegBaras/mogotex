import React from "react";
import { FormattedMessage } from "react-intl";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./css/Contacts.css";
import mapStyles from "./mapStyles";

const containerStyle = {
  width: "100%",
  height: "80%",
};

const center = {
  lat: 54.66853,
  lng: 25.25308,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

function Contacts() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return "Error laoding maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div className="contacts">
      <div className="text-holder">
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
          <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={13}
            center={center}
            options={options}
          >
            <Marker
              position={{ lat: 54.66853, lng: 25.25308 }}
              label={"Mogotex Baltic"}
            />
          </GoogleMap>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Contacts);
