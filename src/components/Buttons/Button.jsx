import React from "react";
import "../../assets/styles/components/Buttons/Button.scss";

const Button = ({ children, active = false }) => {
 return active ? (
  <button className="button button__primary">{children}</button>
 ) : (
  <button className="button button__secondary">{children}</button>
 );
};

export default Button;
