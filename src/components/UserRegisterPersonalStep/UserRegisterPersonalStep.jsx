import React, {useState, useEffect} from "react";


// Styles
import "../../assets/styles/components/UserRegisterSteps/UserRegisterSteps.scss";

const UserRegisterPersonalStep = () => {

 return (
  <div className="user-register__form-step">
   <p className="user-register__form-step--paragrahp">
    Welcome, we are glad to your decision of be part of this big community,
    please tell us more about you :D
   </p>

   <div className="user-register__form-step--row">
    <div className="user-register__form-step--inputs">
     <label htmlFor="first_name">First Name</label>
     <input
      type="text"
      placeholder="Tell us your first name"
      name="first_name"
      id="first_name"
     />
    </div>
    <div className="user-register__form-step--inputs">
     <label htmlFor="last_name">Last Name</label>
     <input
      type="text"
      placeholder="Tell us your last name"
      id="last_name"
      name="last_name"
     />
    </div>
   </div>
   <div className="user-register__form-step--row">
    <div className="user-register__form-step--inputs">
     <label htmlFor="email">Phone</label>
     <input
      type="number"
      placeholder="Tell us your phone number"
      name="telephone"
      id="phone"
     />
    </div>
    <div className="user-register__form-step--inputs">
     <label htmlFor="date_of_birth">Birth</label>
     <input
      type="date"
      placeholder="Tell us your last name"
      id="date_of_birth"
      name="date_of_birth"
     />
    </div>
   </div>
   <div className="user-register__form-step--inputs">
    <label htmlFor="email">Email</label>
    <input
     type="email"
     placeholder="Tell us your first email"
     name="email"
     id="email"
    />
   </div>
  </div>
 );
};

export default UserRegisterPersonalStep;
