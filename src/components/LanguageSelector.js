import React from "react";
import { LOCALES } from "../i18n";
import "../components/css/LanguageSelector.css";

function LanguageSelector({ onLanguageClick }) {
  return (
    <div className="languageSelector">
      <button
        className="languageButton"
        onClick={() => onLanguageClick(LOCALES.LITHUANIAN)}
      >
        LT
      </button>
      <button
        className="languageButton"
        onClick={() => onLanguageClick(LOCALES.ENGLISH)}
      >
        EN
      </button>
      <button
        className="languageButton"
        onClick={() => onLanguageClick(LOCALES.RUSSIAN)}
      >
        RU
      </button>
    </div>
  );
}

export default LanguageSelector;
