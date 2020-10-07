import React from "react";
import "../../assets/styles/components/Buttons/Button.scss";

const Button = ({
 children,
 active = false,
 className,
 onClick,
 type = "button",
}) => {
 return active ? (
  <button
   type={type}
   className={`button button__primary ${className}`}
   onClick={onClick}>
   {children}
  </button>
 ) : (
  <button
   type={type}
   className={`button button__secondary ${className}`}
   onClick={onClick}>
   {children}
  </button>
 );
};

export default Button;
