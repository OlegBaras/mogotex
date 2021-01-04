import React from "react";
import { FormattedMessage } from "react-intl";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./css/Contacts.css";
import mapStyles from "./mapStyles";
import Pin from "./icons/pin.svg";
import Fax from "./icons/fax-machine.svg";
import Phone from "./icons/phone.svg";
import MobilePhone from "./icons/mobile-phone.svg";
import Email from "./icons/email.svg";

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
          {/* <p>
            <FormattedMessage id="PhoneNumber" /> : +370 5 250 5405
          </p> */}
          <div className="contact-items">
            <img src={Phone} alt="Phone" role="img" />
            +370 5 250 5405
          </div>
          <div className="contact-items">
            <img src={Fax} alt="Fax Machine" /> +370 5 249 7087
          </div>
          <div className="contact-items">
            <img src={MobilePhone} alt="Mobile Phone" /> +370 685 59789
          </div>
          <div className="contact-items">
            <img src={Email} alt="Email address" />
            mogotexbaltic@mogotexbaltic.lt
          </div>
          <div className="contact-items">
            <img src={Pin} alt="Location Pin" />
            <FormattedMessage id="AddressLine" />
          </div>
          <div>
            <FormattedMessage id="Wholesale" />
          </div>
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
