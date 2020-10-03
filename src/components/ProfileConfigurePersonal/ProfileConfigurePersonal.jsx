import React from "react";

// Styles
import "../../assets/styles/components/ProfileConfigure/ProfileConfigure.scss";

// Components
import FormStep from "../FormStep/FormStep";
import SelectCategories from "../SelectCategories/SelectCategories";

const ProfileConfigurePersonal = () => {
 return (
  <FormStep title="Personal Information">
   <div className="profile-configure__inputs">
    <label htmlFor="first_name">First Name:</label>
    <input type="text" placeholder="Tell us your name" id="first_name" />
   </div>
   <div className="profile-configure__inputs">
    <label htmlFor="last_name">Last Name:</label>
    <input type="text" placeholder="Tell us last name" id="last_name" />
   </div>
   <div className="profile-configure__inputs">
    <label htmlFor="email">Email:</label>
    <input type="text" placeholder="Tell us your new email" id="email" />
   </div>
   <div className="profile-configure__inputs">
    <label htmlFor="phone">Phone:</label>
    <input type="text" placeholder="Tell us your new phone" id="phone" />
   </div>

   <div className="profile-configure__inputs">
    <label>Nationality And Location:</label>

    <div className="profile-configure__inputs--row">
     <div className="profile-configure__inputs--select">
      <label htmlFor="nationality">Nationality:</label>
      <select id="nationality">
       <option>USA</option>
      </select>
     </div>
     <div className="profile-configure__inputs--select">
      <label htmlFor="nationality">Location:</label>
      <select id="location">
       <option>COL</option>
      </select>
     </div>
    </div>
   </div>
  </FormStep>
 );
};

export default ProfileConfigurePersonal;
