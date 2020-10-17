import React from "react";
import { MdPhotoCamera } from "react-icons/md";

// Style
import "../../assets/styles/components/ProfileHeaderPhoto/ProfileHeaderPhoto.scss";

// Components
import SmallButtonSA from "../Buttons/SmallButtonSA";

const ProfileHeaderPhoto = ({ name, avatar, onPhoto, isUser = false }) => {
 return (
  <div className="profile-header-photo">
   <figure className="profile-header-photo__figure">
    <img src={avatar} alt={name} aria-label={name} />
    {isUser && (
     <SmallButtonSA
      icon={MdPhotoCamera}
      width="24px"
      height="24px"
      font-size="12px"
      onClick={onPhoto}
      className="profile-header-photo__figure--action"
     />
    )}
   </figure>
   <h2 className="profile-header-photo__name">{name}</h2>
  </div>
 );
};

export default ProfileHeaderPhoto;
