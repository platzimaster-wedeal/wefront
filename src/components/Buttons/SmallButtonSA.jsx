import React from "react";
import "../../assets/styles/components/Buttons/SmallButtonSA.scss";

const SmallButtonSA = ({ icon, className, onClick }) => {
 const MdIcon = icon;
 return (
  <button className={`button-actionSA ${className}`} onClick={onClick}>
   <MdIcon />
  </button>
 );
};

export default SmallButtonSA;
