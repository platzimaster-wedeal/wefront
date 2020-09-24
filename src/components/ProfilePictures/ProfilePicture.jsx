import React from "react";
import "../../assets/styles/components/ProfilePicture/ProfilePicture.scss";

const ProfilePicture = ({ source, alt, active, className }) => {
 return active ? (
  <img
   className={`image image__isOnline ${className}`}
   src={source}
   alt={alt}
  />
 ) : (
  <img className="image image__isOffline" src={source} alt={alt} />
 );
};

export default ProfilePicture;
