import React from "react";

// Styles
import "../../assets/styles/components/ProfileConfigure/ProfileConfigure.scss";

// Components
import ProfileHeaderSmall from "../ProfileHeaderSmall/ProfileHeaderSmall";
import ProfileConfigureGeneral from "../ProfileConfigureGeneral/ProfileConfigureGeneral";
import ProfileConfigurePersonal from "../ProfileConfigurePersonal/ProfileConfigurePersonal";
import ProfileConfigureWorker from "../ProfileConfigureWorker/ProfileConfigureWorker";
import ProfilePreference from "../ProfilePreference/ProfilePreference";
import Button from "../Buttons/Button";

const ProfileConfigure = ({ isWorker }) => {
 return (
  <form className="profile-configure">
   <ProfileHeaderSmall />
   <ProfileConfigureGeneral />
   <ProfileConfigurePersonal />
   {isWorker ? (
    <ProfileConfigureWorker />
   ) : (
    <ProfilePreference onClick={handlePreference} />
   )}

   <div className="profile-configure__actions">
    <Button active>Save</Button>
    <Button>Cancel</Button>
   </div>
  </form>
 );
};

export default ProfileConfigure;
