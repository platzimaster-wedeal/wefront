import React from "react";

// Layouts
import PresentationView from "../../layouts/PresentationView/PresentationView";

// Components
import Register from "../../components/UserRegister/UserRegister";

const UserRegister = () => {

  const onSubmit = (ev) => {
    ev.preventDefault()

  }

 return (
  <PresentationView isRegister={true}>
   <Register onSubmit={onSubmit}/>
  </PresentationView>
 );
};

export default UserRegister;
