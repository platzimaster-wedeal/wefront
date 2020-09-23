import React from "react";
import "../../assets/styles/components/Buttons/SmallButtonSA.scss";

const buttonSize = (width, height, fontSize) => {
 return {
  width: width || "70px",
  height: height || "70px",
  fontSize: fontSize || "70px",
 };
};

const SmallButtonSA = ({ icon, width, height, fontSize, onClick }) => {
 const MdIcon = icon;
 return (
  <button
   className="button-actionSA"
   style={buttonSize(width, height, fontSize)}
   onClick={onClick}>
   <MdIcon />
  </button>
 );
};

export default SmallButtonSA;
