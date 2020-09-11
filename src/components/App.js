import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../assets/styles/App.scss";
// components

// pages
import Signup from "../container/Signup";
import Signup1 from "../container/Signup1";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={Signup} />
        <Route exact path="/register/userdata" component={Signup1} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
