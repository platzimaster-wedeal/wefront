import React from "react";

// Styles
import "../../assets/styles/components/ProfileConfigure/ProfileConfigure.scss";

// Components
import FormStep from "../FormStep/FormStep";
import SelectCategories from "../SelectCategories/SelectCategories";

const ProfileConfigureGeneral = () => {
 return (
  <FormStep title="General Information">
   <div className="profile-configure__inputs">
    <label htmlFor="profession">Profession:</label>
    <input type="text" placeholder="Tell us your Profession" id="profession" />
   </div>
   <div className="profile-configure__inputs">
    <label htmlFor="description">Short Description:</label>
    <input
     type="text"
     placeholder="Give us a short description"
     id="description"
    />
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

   <div className="profile-configure__inputs">
    <SelectCategories
     title="Languages"
     categories={["Spanish", "English"]}
     userCategories={["Spanish"]}
    />
   </div>
  </FormStep>
 );
};

export default ProfileConfigureGeneral;
