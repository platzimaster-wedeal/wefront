import React from "react";
import ImgUser from "../../assets/static/img/users/user.jpg";
import { MdPhotoCamera } from "react-icons/md";

// Style
import "../../assets/styles/components/ProfileHeaderPhoto/ProfileHeaderPhoto.scss";

// Components
import SmallButtonSA from "../Buttons/SmallButtonSA";

const ProfileHeaderPhoto = ({
 name = "Tupac Shakur Walks",
 onPhoto,
 isVisitor = true,
}) => {
 return (
  <div className="profile-header-photo">
   <figure className="profile-header-photo__figure">
    <img src={ImgUser} alt={name} aria-label={name} />
    {isVisitor != true && (
     <SmallButtonSA
      icon={MdPhotoCamera}
      width="30px"
      height="30px"
      font-size="21px"
      onClick={onPhoto}
     />
    )}
   </figure>
   <h2 className="profile-header-photo__name">{name}</h2>
  </div>
 );
};

export default ProfileHeaderPhoto;
