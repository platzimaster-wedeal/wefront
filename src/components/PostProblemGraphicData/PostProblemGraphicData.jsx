import React from "react";
import { MdLocationOn, MdAccessTime, MdWifiTethering } from "react-icons/md";

// Styles
import "../../assets/styles/components/PostProblemGraphicData/PostProblemGraphicData.scss";

import GraphicData from "../GraphicData/GraphicData";

const PostProblemGraphicData = ({
 location = "USA",
 time = "Day",
 modality = "Remote",
}) => (
 <div className="post-problem-graphic-data">
  <GraphicData value={location} active>
   <MdLocationOn size={30} />
  </GraphicData>
  <GraphicData value={time}>
   <MdAccessTime size={30} />
  </GraphicData>
  <GraphicData value={modality}>
   <MdWifiTethering size={30} />
  </GraphicData>
 </div>
);

export default PostProblemGraphicData;
