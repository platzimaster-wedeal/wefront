import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "../components/styles/GlobalStyles";
// components

// pages
import Signup from "../pages/Signup/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
