import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "../components/css/Home.css";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="home">
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
      <h1 className="home-title">
        UAB MOGO<span>TEX</span> BALTIC
      </h1>
      <div className="home-text">
        <FormattedMessage id="about-message" />
      </div>

      <div className="home-cta-container">
        <Link to="/fabrics" className="home-cta-button">
          <FormattedMessage id="fabrics" />
        </Link>
        <Link to="/contacts" className="home-cta-button">
          <FormattedMessage id="contacts" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
