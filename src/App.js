import React, { useState } from "react";
import { I18nProvider, LOCALES } from "./i18n";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import LanguageSelector from "./components/LanguageSelector";
import Routes from "./Routes";
import "./App.css";

function App() {
  const [locale, setLocale] = useState(LOCALES.LITHUANIAN);

  return (
    <I18nProvider locale={locale}>
      <Router>
        <Nav />
        <LanguageSelector onLanguageClick={(e) => setLocale(e)} />
        <Routes />
      </Router>
    </I18nProvider>
  );
}

export default App;
