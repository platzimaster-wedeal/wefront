import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ProfilePicture from "../ProfilePictures/ProfilePicture";
import "../../assets/styles/components/ProfileSmallCard/ProfileSmallCard.scss";

const ProfileSmallCard = ({
 imageSource,
 altImage,
 title,
 subtitle,
 active,
 idUser,
 children,
}) => {
 const [hovered, setHover] = useState(false);
 const history = useHistory();

 const goToUserProfile = () => {
  history.push(`/user/profile/${idUser}`);
 };

 return (
  <div
   onMouseEnter={() => setHover(true)}
   onMouseLeave={() => setHover(false)}
   className="profileCard">
   {children(hovered)}
   <ProfilePicture
    className="profileCard__image"
    source={imageSource}
    alt={altImage}
    active={active}
   />
   <div className="profileCard__container">
    <p className="profileCard__container--title" onClick={goToUserProfile}>
     {title}
    </p>
    <p className="profileCard__container--subtitle"> {subtitle}</p>
   </div>
  </div>
 );
};

export default ProfileSmallCard;
