import React, { useState } from "react";
import ProfilePicture from "../ProfilePictures/ProfilePicture";
import "../../assets/styles/components/ProfileSmallCard/ProfileSmallCard.scss";

const ProfileSmallCard = ({
 imageSource,
 altImage,
 title,
 subtitle,
 active,
 children,
}) => {
 const [hovered, setHover] = useState(false);

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
    <p className="profileCard__container--title">{title}</p>
    <p className="profileCard__container--subtitle"> {subtitle}</p>
   </div>
  </div>
 );
};

export default ProfileSmallCard;
