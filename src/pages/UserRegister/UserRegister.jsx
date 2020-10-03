import React from "react";

// Layouts
import PresentationView from "../../layouts/PresentationView/PresentationView";

// Components
import Register from "../../components/UserRegister/UserRegister";

const UserRegister = () => {
 return (
  <PresentationView isRegister={true}>
   <Register />
  </PresentationView>
 );
};

export default UserRegister;
