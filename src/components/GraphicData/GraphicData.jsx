import React from "react";
import { MdLocationOn } from "react-icons/md";

import "../../assets/styles/components/GraphicData/GraphicData.scss";

const GraphicData = ({ children, value, active }) => {
 return (
  <div className={`graphic-data ${active && "graphic-data--active"}`}>
   {children || <MdLocationOn size={21} />}
   <strong>{value || "USA"}</strong>
  </div>
 );
};

export default GraphicData;
