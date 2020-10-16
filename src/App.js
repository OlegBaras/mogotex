import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Fabrics from "./components/Fabrics";
import WorkClothes from "./components/WorkClothes";
import TableCloths from "./components/TableCloths";
import Contacts from "./components/Contacts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
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
    </Router>
  );
}

export default App;
