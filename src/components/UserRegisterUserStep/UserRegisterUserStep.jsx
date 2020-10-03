import React from "react";

// Styles
import "../../assets/styles/components/UserRegisterSteps/UserRegisterSteps.scss";

// Components
import InputFile from "../inputFile/InputFile";

const UserRegisterUserStep = () => {
 return (
  <div className="user-register__form-step">
   <p className="user-register__form-step--paragrahp">
    Great! Now we need more information about you :D
   </p>

   <div className="user-register__form-step--row">
    <div className="user-register__form-step--inputs">
     <label htmlFor="username">Username</label>
     <input
      type="text"
      placeholder="Create a username"
      name="username"
      id="username"
     />
    </div>
    <div className="user-register__form-step--inputs">
     <label htmlFor="profession">Profession</label>
     <input
      type="text"
      placeholder="Tell us your Profession"
      id="profession"
      name="profession"
     />
    </div>
   </div>

   <div className="user-register__form-step--row">
    <div className="user-register__form-step--inputs">
     <label htmlFor="password">Password</label>
     <input
      type="password"
      placeholder="Write your password"
      name="password"
      id="password"
     />
    </div>
    <div className="user-register__form-step--inputs">
     <label htmlFor="confirm_password">Confirm Password</label>
     <input
      type="password"
      placeholder="Confirm your password"
      name="confirm_password"
      id="confirm_password"
     />
    </div>
   </div>

   <div className="user-register__form-step--inputs">
    <label htmlFor="description">Description</label>
    <textarea
     rows="2"
     name="description"
     placeholder="Write a short description about you"
    />
   </div>

   <div className="user-register__form-step--inputs">
    <label htmlFor="myAvatar">Photo</label>
    <InputFile placeholder="Select an profile image" name="myAvatar" />
   </div>
  </div>
 );
};

export default UserRegisterUserStep;
