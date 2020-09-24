import React from "react";
import { MdPlace } from "react-icons/md";
import "../../assets/styles/components/GraphicData/Location.scss";

const Location = ({ country, active = false }) => {
 return (
  <div
   className={`grapichData__location__container
    ${active ? `location__active--true` : `location__active--false`}`}>
   <MdPlace />
   <p>{country}</p>
  </div>
 );
};

export default Location;
