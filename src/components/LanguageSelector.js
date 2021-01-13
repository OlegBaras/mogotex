import React, { useState } from "react";
import { LOCALES } from "../i18n";
import "../components/css/LanguageSelector.css";

function LanguageSelector() {
  // TO DO: export locale, setLocale into context API
  const [locale, setLocale] = useState(LOCALES.LITHUANIAN);

  return (
    <div className="languageSelector">
      <button
        className="languageButton"
        onClick={() => setLocale(LOCALES.LITHUANIAN)}
      >
        LT
      </button>
      <button
        className="languageButton"
        onClick={() => setLocale(LOCALES.ENGLISH)}
      >
        EN
      </button>
      <button
        className="languageButton"
        onClick={() => setLocale(LOCALES.RUSSIAN)}
      >
        RU
      </button>
    </div>
  );
}

export default LanguageSelector;
