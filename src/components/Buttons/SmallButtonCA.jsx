import React from "react";
import "../../assets/styles/components/Buttons/SmallButtonCA.scss";

const buttonSize = (width, height, fontSize, closeBtn) => {
 if (closeBtn) {
  return {
   backgroundColor: " hsl(152,59%,94%)",
   color: " hsla(240,27%,12%,.6)",
   width: width || "70px",
   height: height || "70px",
   fontSize: fontSize || "70px",
  };
 }
 return {
  width: width || "70px",
  height: height || "70px",
  fontSize: fontSize || "70px",
 };
};

const SmallButtonCA = ({ icon, width, height, fontSize, closeBtn }) => {
 const MdIcon = icon;
 return (
  <button
   className="button-actionCA"
   style={buttonSize(width, height, fontSize, closeBtn)}>
   <MdIcon />
  </button>
 );
};

export default SmallButtonCA;
