import React from "react";

// Styles
import "../../assets/styles/components/WorkerInformationLastProblems/WorkerInformationLastProblems.scss";

// Components
import ProblemPrevisualization from "../ProblemPrevisualization/ProblemPrevisualization";

const WorkerInformationLastProblems = ({ problems }) => {
 return (
  <div className="worker-information-last-problems">
   <strong className="worker-information-last-problems__title">
    Last Problems Solved
   </strong>
   <ul className="worker-information-last-problems__list">
    {problems && problems.length > 0 ? (
     problems.map((problem, id) => (
      <li key={id}>
       {" "}
       <ProblemPrevisualization
        state={problem.state}
        idProblem={problem.id}
       />{" "}
      </li>
     ))
    ) : (
     <span>This user doesn't have solve any problem yet.</span>
    )}
   </ul>
  </div>
 );
};

export default WorkerInformationLastProblems;
