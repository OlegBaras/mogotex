import React, { useState } from "react";
import { I18nProvider, LOCALES } from "./i18n";
import { BrowserRouter as Router } from "react-router-dom";
import NavLinks from "./components/NavLinks";
import LanguageSelector from "./components/LanguageSelector";
import Routes from "./Routes";
import "./App.css";
import HeaderNav from "./components/HeaderNav";
import NavLogo from "./components/NavLogo";

function App() {
  const [locale, setLocale] = useState(LOCALES.LITHUANIAN);

  return (
    <I18nProvider locale={locale}>
      <Router>
        <HeaderNav>
          <NavLinks />
          <NavLogo />
          <LanguageSelector onLanguageClick={(e) => setLocale(e)} />
        </HeaderNav>
        <Routes />
      </Router>
    </I18nProvider>
  );
}

export default App;
