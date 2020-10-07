import React from "react";

// Styles
import "../../assets/styles/components/WorkerInformation/WorkerInformation.scss";

import WorkerMainInformation from "../WorkerMainInformation/WorkerMainInformation";

const WorkerInformation = ({ onClick }) => {
 return (
  <article className="worker-information">
   <div className="worker-information__title">
    <h3>Worker Information</h3>
    <strong onClick={onClick}>See all information</strong>
   </div>

   <WorkerMainInformation />
  </article>
 );
};

export default WorkerInformation;
