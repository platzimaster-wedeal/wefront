import React from "react";
import "../../assets/styles/components/Buttons/Button.scss";

const Button = ({ children, active = false, className }) => {
 return active ? (
  <button className={`button button__primary ${className}`}>{children}</button>
 ) : (
  <button className={`button button__secondary ${className}`}>
   {children}
  </button>
 );
};

export default Button;
