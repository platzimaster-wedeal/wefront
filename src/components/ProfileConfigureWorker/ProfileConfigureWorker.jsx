import React from "react";

// Styles
import "../../assets/styles/components/ProfileConfigure/ProfileConfigure.scss";

// Components
import FormStep from "../FormStep/FormStep";
import SelectCategories from "../SelectCategories/SelectCategories";
import ProfilePreference from "../ProfilePreference/ProfilePreference";
import AddOptionList from "../AddOptionList/AddOptionList";

const ProfileConfigureWorker = () => {
 return (
  <FormStep title="Worker Information">
   <div className="profile-configure__inputs">
    <SelectCategories
     title="Categories"
     categories={["Engineer", "Art", "Electronic"]}
     userCategories={["Art"]}
    />
   </div>

   <div className="profile-configure__inputs">
    <AddOptionList title="Experience" />
   </div>

   <div className="profile-configure__inputs">
    <ProfilePreference isWorker />
   </div>
  </FormStep>
 );
};

export default ProfileConfigureWorker;
