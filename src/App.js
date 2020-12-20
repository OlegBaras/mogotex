import React, { useState } from "react";
import "./App.css";
import { I18nProvider, LOCALES } from "./i18n";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Fabrics from "./components/Fabrics";
import WorkClothes from "./components/WorkClothes";
import TableCloths from "./components/TableCloths";
import Contacts from "./components/Contacts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [locale, setLocale] = useState(LOCALES.LITHUANIAN);
  return (
    <Router>
      <I18nProvider locale={locale}>
        <div className="App">
          <Nav />
          <div className="languageSelector">
            <button
              className="languageButton"
              onClick={() => setLocale(LOCALES.LITHUANIAN)}
            >
              {/* <span role="img" aria-label="LT">
                🇱🇹
              </span> */}
              LT
            </button>
            <button
              className="languageButton"
              onClick={() => setLocale(LOCALES.ENGLISH)}
            >
              {/* <span role="img" aria-label="GB">
                🇬🇧
              </span> */}
              EN
            </button>
            <button
              className="languageButton"
              onClick={() => setLocale(LOCALES.RUSSIAN)}
            >
              {/* <span role="img" aria-label="RU">
                🇷🇺
              </span> */}
              RU
            </button>
          </div>

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
