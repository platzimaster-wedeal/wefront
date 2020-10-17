import React from "react";
import { MdWork, MdLanguage, MdStar } from "react-icons/md";

// Styles
import "../../assets/styles/components/WorkerMainInformation/WorkerMainInformation.scss";

import GraphicData from "../GraphicData/GraphicData";

const WorkerMainInformation = ({
 email,
 valoration = "4.5",
 profession = ""
}) => (
 <div className="worker-main-information">
  <strong className="worker-main-information__title">Main Information</strong>
  <ul>
   <li>
    <GraphicData active={true} value={profession}>
     <MdWork size={30} />
    </GraphicData>
   </li>
   <li>
    <GraphicData active={true} value={email}>
     <MdLanguage size={30} />
    </GraphicData>
   </li>
   <li>
    <GraphicData active={true} value={`${valoration}/5`}>
     <MdStar size={30} />
    </GraphicData>
   </li>
  </ul>
 </div>
);

export default WorkerMainInformation;
