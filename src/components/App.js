import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../assets/styles/App.scss";

// components

// pages
import Signup from "../container/Signup";



const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
