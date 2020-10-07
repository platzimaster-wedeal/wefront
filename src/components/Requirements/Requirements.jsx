import React from "react";
import { MdDone } from "react-icons/md";
import "../../assets/styles/components/Requirements/Requirements.scss";

const Requirements = ({ title }) => {
 return (
  <div className="requirements__container">
   <MdDone className="requirements__container-icon" />
   <p className="requirements__container-content">{title}</p>
  </div>
 );
};

export default Requirements;
