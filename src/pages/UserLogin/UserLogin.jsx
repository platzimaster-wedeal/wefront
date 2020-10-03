import React from "react";

// Layouts
import PresentationView from "../../layouts/PresentationView/PresentationView";

// Components
import Login from "../../components/UserLogin/UserLogin";

const UserLogin = () => {
 return (
  <PresentationView isRegister={false}>
   <Login />
  </PresentationView>
 );
};

export default UserLogin;
