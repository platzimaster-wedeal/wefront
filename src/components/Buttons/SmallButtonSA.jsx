import React from "react";
import "../../assets/styles/components/Buttons/SmallButtonSA.scss";

const SmallButtonSA = ({ icon, className }) => {
 const MdIcon = icon;
 return (
  <button className={`button-actionSA ${className}`}>
   <MdIcon />
  </button>
 );
};

export default SmallButtonSA;
