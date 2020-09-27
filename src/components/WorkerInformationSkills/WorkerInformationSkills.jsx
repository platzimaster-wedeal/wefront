import React from "react";

// Styles
import "../../assets/styles/components/WorkerInformationSkills/WorkerInformationSkills.scss";

// Components
import Labels from "../Labels/Labels";

const WorkerInformationSkills = ({ skills }) => {
 return (
  <div className="worker-information-skills">
   <strong className="worker-information-skills__title">
    Skills And Categories
   </strong>
   <ul className="worker-information-skills__list">
    {skills && skills.length > 0 ? (
     skills.map((skill, id) => (
      <li key={id}>
       {" "}
       <Labels active name={skill} />{" "}
      </li>
     ))
    ) : (
     <span>This user aren't in some category.</span>
    )}
   </ul>
  </div>
 );
};

export default WorkerInformationSkills;
