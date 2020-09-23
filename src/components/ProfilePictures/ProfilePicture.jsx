import React from "react";
import "../../assets/styles/components/ProfilePicture/ProfilePicture.scss";

const ProfilePicture = ({ source, alt, active }) => {
 return active ? (
  <img className="image image__isOnline" src={source} alt={alt} />
 ) : (
  <img className="image image__isOffline" src={source} alt={alt} />
 );
};

export default ProfilePicture;
