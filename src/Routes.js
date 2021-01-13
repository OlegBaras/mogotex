import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fabrics from "./pages/Fabrics";
import Contacts from "./pages/Contacts";

const Routes = () => (
  <>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/fabrics" component={Fabrics} />
      <Route path="/contacts" component={Contacts} />
    </Switch>
  </>
);

export default Routes;
