import React, { useState } from "react";
import "./App.css";
import { I18nProvider, LOCALES } from "./i18n";
import { FormattedMessage } from "react-intl";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Fabrics from "./components/Fabrics";
import WorkClothes from "./components/WorkClothes";
import TableCloths from "./components/TableCloths";
import Contacts from "./components/Contacts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
    <Router>
      <I18nProvider locale={locale}>
        <div className="App">
          <div className="languageSelector">
            <button onClick={() => setLocale(LOCALES.LITHUANIAN)}>LT</button>
            <button onClick={() => setLocale(LOCALES.ENGLISH)}>EN</button>
            <button onClick={() => setLocale(LOCALES.RUSSIAN)}>RU</button>
          </div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/fabrics" component={Fabrics} />
            <Route path="/work-clothes" component={WorkClothes} />
            <Route path="/table-cloths" component={TableCloths} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </div>
      </I18nProvider>
    </Router>
  );
}

export default App;
