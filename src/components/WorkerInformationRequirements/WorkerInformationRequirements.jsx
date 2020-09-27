import React from "react";

// Styles
import "../../assets/styles/components/WorkerInformationRequirements/WorkerInformationRequirements.scss";

// Components
import Requirements from "../Requirements/Requirements";

const WorkerInformationRequirements = ({ requirements }) => {
 return (
  <div className="worker-information-requirements">
   <strong className="worker-information-requirements__title">
    Requirements
   </strong>
   <ul className="worker-information-requirements__list">
    {requirements && requirements.length > 0 ? (
     requirements.map((req, i) => (
      <li key={i}>
       <Requirements title={req} />
      </li>
     ))
    ) : (
     <Requirements title="There is no requirements!" />
    )}
   </ul>
  </div>
 );
};

export default WorkerInformationRequirements;
