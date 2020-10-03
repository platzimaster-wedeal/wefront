import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import Landing from "../pages/Landing/Landing";
import Home from "../pages/Home/Home";
import Problems from "../pages/Problems/Problems";
import ProblemsDetail from "../pages/ProblemsDetail/ProblemsDetail";
import UserConfigure from "../pages/UserConfigure/UserConfigure";
import UserProfile from "../pages/UserProfile/UserProfile";
import Deals from "../pages/Deals/Deals";

import UserLogin from "../pages/UserLogin/UserLogin";
import UserRegister from "../pages/UserRegister/UserRegister";

import Signup from "../container/Signup";
import Signup1 from "../container/Signup1";
import Skills from "../container/Skills";
import CompanyData from "../container/CompanyData";
import Draw from "../container/Draw";

const App = () => {
 return (
  <BrowserRouter>
   <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/problems" component={Problems} />
    <Route exact path="/detail/problem/:id?" component={ProblemsDetail} />
    <Route exact path="/user/configuration" component={UserConfigure} />
    <Route exact path="/user/profile/:id?" component={UserProfile} />
    <Route exact path="/user/deals" component={Deals} />

    <Route exact path="/login" component={UserLogin} />
    <Route exact path="/register" component={UserRegister} />
    <Route path='*' component={Landing} />

    <Route exact path="/register/userdata" component={Signup1} />
    <Route exact path="/register/selectSkills" component={Skills} />
    <Route exact path="/register/copanydata" component={CompanyData} />
    <Route exact path="/draw" component={Draw} />
   </Switch>
  </BrowserRouter>
 );
};

export default App;
