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

const ProfileConfigure = ({ isWorker, user, setGeneralInformation, setPersonalInformation, setEmployeerInformation, onSave }) => {


 return (
  <section className="profile-configure">
   <ProfileHeaderSmall 
      name={user.first_name}
      source={user.avatar}
      description={user.description}
   />
   <ProfileConfigureGeneral 
      profileUsername={user.username}
      profileProfession={user.profession}
      profileDescription={user.description}
      profileLanguages={user.languages}
      setInformation={setGeneralInformation}
   />
   <ProfileConfigurePersonal 
      profileName={user.first_name}
      profileLastName={user.last_name}
      profileEmail={user.email}
      profilePhone={user.telephone}
      profileBirth={user.date_of_birth}
      setInformation={setPersonalInformation}
   />
   {isWorker ? (
    <ProfileConfigureWorker 
      userSkills={user.id_work_area}
      experience={user.experience}
      setInformation={setEmployeerInformation}
    />
   ) : (
    <ProfilePreference />
   )}

   <div className="profile-configure__actions">
    <Button active onClick={onSave}>Save</Button>
    <Button>Cancel</Button>
   </div>
  </section>
 );
};

export default ProfileConfigure;
