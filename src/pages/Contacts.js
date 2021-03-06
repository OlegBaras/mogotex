import React from "react";
import { FormattedMessage } from "react-intl";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "../components/css/Contacts.css";
import mapStyles from "../components/mapStyles";
import Pin from "../components/icons/pin.svg";
import Fax from "../components/icons/fax-machine.svg";
import Phone from "../components/icons/phone.svg";
import MobilePhone from "../components/icons/mobile-phone.svg";
import Email from "../components/icons/email.svg";
import { Helmet } from "react-helmet";

const containerStyle = {
  width: "100%",
  height: "100%",
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
  const sendEmail = () => {
    window.location = "mailto:mogotexbaltic@mogotexbaltic.lt";
  };

  const makeCall = () => {
    window.open("tel: +37052505405");
  };
  const makeMobileCall = () => {
    window.open("tel: +37068559789");
  };
  const sendFax = () => {
    window.open("fax: 123123123");
  };
  const openMap = () => {
    window.open(
      "https://www.google.com/maps/place/Mogotex+Baltic/@54.668603,25.2509543,17z/data=!3m1!4b1!4m5!3m4!1s0x46dd947ba96e28ff:0x19efc1bb2b069850!8m2!3d54.668603!4d25.253143"
    );
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return "Error laoding maps";
  if (!isLoaded) return "";

  return (
    <div>
      <Helmet>
        <title>
          UAB Mogotex Baltic - Audiniai darbo rūbams, Staltiesiniai audiniai,
          Mišriapluoščiai audiniai, Kamufliažiniai audiniai, Vilnius.
        </title>
        <meta
          name="description"
          content="Audiniai darbo rūbams, Staltiesiniai audiniai, Mišriapluoščiai audiniai, Kamufliažiniai audiniai, Vilnius. UAB „Mogotex Baltic“ buvo įkurta 2000 m. Bendrovė yra didžiausio Baltarusijos tekstilės gamintojo „Mogotex“ atstovė Baltijos šalyse. Siūlomų produktų asortimente yra didelis audinių, skirtų įvairioms pramonės šakoms, statyboms, medicinai, poilsiui ir jėgos struktūroms, darbo drabužiams pasirinkimas. Taip pat siūlome namų tekstilės audinius ir kt."
        />
      </Helmet>
      <div className="contacts">
        <div className="contacts-details-holder">
          <div className="contacts-details">
            <div
              className="contact-items"
              onClick={() => {
                makeCall();
              }}
            >
              <img src={Phone} alt="Phone" />
              +370 5 250 5405
            </div>
            <div
              className="contact-items"
              onClick={() => {
                sendFax();
              }}
            >
              <img src={Fax} alt="Fax Machine" />
              +370 5 249 7087
            </div>
            <div
              className="contact-items"
              onClick={() => {
                makeMobileCall();
              }}
            >
              <img src={MobilePhone} alt="Mobile Phone" /> +370 685 59789
            </div>
            <div
              className="contact-items"
              onClick={() => {
                sendEmail();
              }}
            >
              <img src={Email} alt="Email address" />
              mogotexbaltic@mogotexbaltic.lt
            </div>
            <div className="contact-items" onClick={() => openMap()}>
              <img src={Pin} alt="Location Pin" />
              <FormattedMessage id="AddressLine" />
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
                label={{
                  text: "Mogotex Baltic",
                  fontSize: "14px",
                }}
              />
            </GoogleMap>
          </div>
        </div>
      </div>

      <div className="contacts-message">
        <FormattedMessage id="Wholesale" />
      </div>
    </div>
  );
}

export default React.memo(Contacts);
