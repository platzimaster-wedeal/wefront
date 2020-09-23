import React from "react";
import { MdSupervisorAccount } from "react-icons/md";
import "../../assets/styles/components/GraphicData/Followers.scss"

const Followers = ({ number, active = false }) => {
 return (
  <div className={`grapichData__followers__container
    ${
      active ? `followers__active--true` : `followers__active--false`
    }`}>
   <MdSupervisorAccount />
   <p>{number}</p>
  </div>
 );
};

export default Followers;
