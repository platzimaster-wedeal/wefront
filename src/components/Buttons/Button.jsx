import React from "react";
import "../../assets/styles/components/Buttons/Button.scss";

const Button = ({ children, active = false, onClick }) => {
 return active ? (
  <button className="button button__primary" onClick={onClick}>
   {children}
  </button>
 ) : (
  <button className="button button__secondary" onClick={onClick}>
   {children}
  </button>
 );
};

export default Button;
