import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { GET_AUTH, DELETE_AUTH } from "../redux/types/Auth/AuthTypes";
import { GET_PROFILE } from "../redux/types/Auth/ProfileTypes";
import { getProfile } from "../services/AuthService/profileService";

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
 const { isAuth, id } = useSelector((state) => state.AuthReducer);
 const { profile } = useSelector((state) => state.ProfileReducer);

 const [token, setToken] = useState(null);
 const [idLocal, setId] = useState(null);
 const dispatch = useDispatch();

 useEffect(() => {
  setToken(window.localStorage.getItem("token"));
  setId(window.localStorage.getItem("id"));
  if (token && idLocal) {
   dispatch({ type: GET_AUTH, payload: idLocal || id });
  } else {
   dispatch({ type: DELETE_AUTH });
  }

  const getUserData = async () => {
   const resp = await getProfile(idLocal || id);
   dispatch({ type: GET_PROFILE, payload: resp.body });
  };
  getUserData();
 }, [token, isAuth]);

 return (
  <BrowserRouter>
   <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/login" component={UserLogin} />
    <Route exact path="/register" component={UserRegister} />

    {isAuth && (
     <>
      <Route exact path="/home" component={Home} />
      <Route exact path="/problems" component={Problems} />
      <Route
       exact
       path="/detail/problem/:idProblem"
       component={ProblemsDetail}
      />
      <Route exact path="/user/configuration" component={UserConfigure} />
      <Route exact path="/user/profile/:idUser?" component={UserProfile} />
      <Route exact path="/user/deals" component={Deals} />
     </>
    )}
    <Route component={UserLogin} />
   </Switch>
  </BrowserRouter>
 );
};

export default App;
