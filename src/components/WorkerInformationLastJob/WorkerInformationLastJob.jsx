import React from "react";
import { MdWork } from "react-icons/md";

// Styles
import "../../assets/styles/components/WorkerInformationLastJob/WorkerInformationLastJob.scss";

// Components
import GraphicData from "../GraphicData/GraphicData";

const WorkerInformationLastJob = () => {
 const last_job = "React Developer Engineer";

 return (
  <div className="worker-information-last-job">
   <strong className="worker-information-last-job__title">
    Last Job Title
   </strong>
   <ul className="worker-information-last-job__list">
    {last_job ? (
     <li>
      <GraphicData active value={last_job}>
       {" "}
       <MdWork size={24} />{" "}
      </GraphicData>
     </li>
    ) : (
     <span>Doesn't upload a last job.</span>
    )}
   </ul>
  </div>
 );
};

export default WorkerInformationLastJob;
