import React from "react";

// Styles
import "../../assets/styles/components/ProfileConfigure/ProfileConfigure.scss";

// Components
import ProfileHeaderSmall from "../ProfileHeaderSmall/ProfileHeaderSmall";
import ProfileConfigureGeneral from "../ProfileConfigureGeneral/ProfileConfigureGeneral";
import ProfileConfigureWorker from "../ProfileConfigureWorker/ProfileConfigureWorker";
import ProfilePreference from "../ProfilePreference/ProfilePreference";
import Button from "../Buttons/Button";

const ProfileConfigure = ({ isWorker }) => {
 return (
  <form className="profile-configure">
   <ProfileHeaderSmall />
   <ProfileConfigureGeneral />
   {isWorker ? <ProfileConfigureWorker /> : <ProfilePreference />}

   <div className="profile-configure__actions">
    <Button active>Save</Button>
    <Button>Cancel</Button>
   </div>
  </form>
 );
};

export default ProfileConfigure;
