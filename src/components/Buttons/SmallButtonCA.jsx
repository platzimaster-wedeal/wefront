import React from "react";
import "../../assets/styles/components/Buttons/SmallButtonCA.scss";

const buttonSize = (closeBtn) => {
 if (closeBtn) {
  return {
   backgroundColor: " hsl(152,59%,94%)",
   color: " hsla(240,27%,12%,.6)",
  };
 }
};

const SmallButtonCA = ({
 icon,
 closeBtn,
 className,
 onClick,
 type = "button",
}) => {
 const MdIcon = icon;
 return (
  <button
   type={type}
   className={`button-actionCA ${className && className}`}
   style={buttonSize(closeBtn)}
   onClick={onClick}>
   <MdIcon />
  </button>
 );
};

export default SmallButtonCA;
