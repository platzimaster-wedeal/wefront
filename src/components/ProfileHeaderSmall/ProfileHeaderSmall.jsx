import React from "react";

// Styles
import "../../assets/styles/components/ProfileHeaderSmall/ProfileHeaderSmall.scss";

// Imgs
import UserPhoto from "../../assets/static/img/users/user.jpg";

// Components
import ProfilePicture from "../ProfilePictures/ProfilePicture";

const ProfileHeaderSmall = ({
 name = "Tupac Shakur",
 source,
 description,
 profession = "Engineer",
}) => {
 return (
  <div className="profile-header-small">
   <figure className="profile-header-small__photo">
    <ProfilePicture active source={source || UserPhoto} alt={name} />
   </figure>
   <div className="profile-header-small__description">
    <div className="profile-header-small__description-name">
     <h4>{name}</h4>
     <small> {profession} </small>
    </div>
    <p>{description || "This user doesn't have a description."}</p>
   </div>
  </div>
 );
};

export default ProfileHeaderSmall;
