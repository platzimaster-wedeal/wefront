import React from "react";
import "../../assets/styles/layouts/ShareAndApplyContainer/ShareAndApplyContainer.scss";

const ShareAndApplyContainer = ({
 title,
 profileImg,
 profileName,
 children,
}) => {
 return (
  <div className="general__container">
   <h4 className="general__container--title">{title}</h4>
   <hr className="general__container--divider" />
   <div className="general__container--img-title">
    <figure className="general__container--img-profile">
     <img src={profileImg} alt={profileImg} />
    </figure>
    <h2 className="container__img-profile--name">{profileName}</h2>
    <p className="container__img-profile--subtitle">Will Share</p>
   </div>
  </div>
 );
};

export default ShareAndApplyContainer;
