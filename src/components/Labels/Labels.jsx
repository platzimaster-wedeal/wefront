import React from "react";
import "../../assets/styles/components/Label/Label.scss";

const Labels = ({ name, active = false }) => {
 return active ? (
  <span className="label label__active">{name}</span>
 ) : (
  <span className="label label__inactive">{name}</span>
 );
};

export default Labels;
