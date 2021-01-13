import React from "react";
import { I18nProvider, LOCALES } from "./i18n";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./Routes";
import "./App.css";

function App() {
  return (
    // TODO: use React context API for locale
    <I18nProvider locale={LOCALES.LITHUANIAN}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </I18nProvider>
  );
}

export default App;
