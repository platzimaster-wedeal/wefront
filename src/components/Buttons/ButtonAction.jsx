import React from "react";
import "../../assets/styles/components/Buttons/ButtonAction.scss";

const buttonSize = (width, height, fontSize) => {
 return {
  width: width || "70px",
  height: height || "70px",
  fontSize: fontSize || "70px",
 };
};

const ButtonAction = ({ icon, width, height, fontSize, onClick }) => {
 const MdIcon = icon;
 return (
  <button
   className="button-action"
   style={buttonSize(width, height, fontSize)}
   onClick={onClick}>
   <MdIcon />
  </button>
 );
};

export default ButtonAction;
