import React from "react";
// Styles
import "../../assets/styles/components/WorkerInformationDetail/WorkerInformationDetail.scss";

// Components
import WorkerMainInformation from "../WorkerMainInformation/WorkerMainInformation";
import WorkerInformationSkills from "../WorkerInformationSkills/WorkerInformationSkills";
import WorkerInformationCertificates from "../WorkerInformationCertificates/WorkerInformationCertificates";
import WorkerInformationLastProblems from "../WorkerInformationLastProblems/WorkerInformationLastProblems";

const WorkerInformationDetail = () => {
 return (
  <article className="worker-information-detail">
   <div className="worker-information-detail__main-information">
    <WorkerMainInformation />
    <WorkerInformationCertificates />
   </div>
   <div className="worker-information-detail__secondary-information">
    <WorkerInformationSkills />
   </div>
  </article>
 );
};

export default WorkerInformationDetail;
