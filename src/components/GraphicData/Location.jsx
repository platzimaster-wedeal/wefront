import React from "react";
import { MdPlace } from "react-icons/md";
import "../../assets/styles/components/GraphicData/Location.scss"

const Location = ({ country, active = false }) => {
 return (
  <div className={`grapichData__container
    ${
      active ? `grapichData__container__active--true` : `grapichData__container__active--false`
    }`}>
   <MdPlace />
   <p>{country}</p>
  </div>
 );
};

export default Location;
