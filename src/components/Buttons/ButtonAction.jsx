import React from "react";
import "../../assets/styles/components/Buttons/ButtonAction.scss";

const ButtonAction = ({ icon, className }) => {
 const MdIcon = icon;
 return (
  <button className={`button-action ${className}`}>
   <MdIcon />
  </button>
 );
};

export default ButtonAction;
