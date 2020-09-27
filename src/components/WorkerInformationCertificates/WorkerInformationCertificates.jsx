import React from "react";

// Styles
import "../../assets/styles/components/WorkerInformationCertificates/WorkerInformationCertificates.scss";

import Requirements from "../Requirements/Requirements";

const WorkerInformationCertificates = ({ certificates }) => {
 return (
  <div className="worker-information-certificates">
   <strong className="worker-information-certificates__title">
    Experience
   </strong>
   <ul className="worker-information-certificates__list">
    {certificates && certificates.length > 0 ? (
     certificates.map((certificate, id) => (
      <li key={id}>
       {" "}
       <Requirements title={certificate} />{" "}
      </li>
     ))
    ) : (
     <span>This user doesn't have certificates upload</span>
    )}
   </ul>
  </div>
 );
};

export default WorkerInformationCertificates;
