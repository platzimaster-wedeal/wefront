import React from "react";

// Styles
import "../../assets/styles/components/ProfileHeader/ProfileHeader.scss";

// Components
import ProfileHeaderPhoto from "../ProfileHeaderPhoto/ProfileHeaderPhoto";
import ProfileHeaderAction from "../ProfileHeaderActions/ProfileHeaderActions";

const ProfileHeader = ({ description, profession }) => {
 return (
  <section className="profile-header">
   <ProfileHeaderPhoto />
   <small className="profile-header__description">
    {description && description}
   </small>
   <strong className="profile-header__profession">
    {profession && profession}
   </strong>

   <div className="profile-header__actions">
    <ProfileHeaderAction isVisitor={false} />
   </div>
  </section>
 );
};

export default ProfileHeader;
