import React from "react";

// Styles
import "../../assets/styles/components/WorkerInformation/WorkerInformation.scss";

import WorkerMainInformation from "../WorkerMainInformation/WorkerMainInformation";

const WorkerInformation = ({ onClick, profile }) => {
 return (
  <article className="worker-information">
   <div className="worker-information__title">
    <h3>Worker Information</h3>
   </div>

   <WorkerMainInformation valoration={profile.qualification_average} email={profile.email} profession={profile.title} />
  </article>
 );
};

export default WorkerInformation;
