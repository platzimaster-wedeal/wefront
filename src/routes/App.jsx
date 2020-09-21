import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import Signup from "../container/Signup";
import Signup1 from "../container/Signup1";
import Skills from "../container/Skills";
import CompanyData from "../container/CompanyData";
import Draw from "../container/Draw";

const App = () => {
 return (
  <BrowserRouter>
   <Switch>
    <Route exact path="/register" component={Signup} />
    <Route exact path="/register/userdata" component={Signup1} />
    <Route exact path="/register/selectSkills" component={Skills} />
    <Route exact path="/register/copanydata" component={CompanyData} />
    <Route exact path="/draw" component={Draw} />
   </Switch>
  </BrowserRouter>
 );
};

export default App;
