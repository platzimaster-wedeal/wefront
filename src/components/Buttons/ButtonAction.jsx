import React from "react";
import "../../assets/styles/components/Buttons/ButtonAction.scss";

const ButtonAction = ({ icon, className, onClick }) => {
 const MdIcon = icon;
 return (
  <button className={`button-action ${className}`} onClick={onClick}>
   <MdIcon />
  </button>
 );
};

export default ButtonAction;
