import React from "react";
import { MdCheckCircle } from "react-icons/md";

import "../../assets/styles/components/problemPrevisualization/problemPrevisualization.scss";

const ProblemPrevisualization = ({ state = true, IdProblem = "#15131" }) => {
 return (
  <li
   aria-label={`Problem ${state}`}
   className={`problemPrevisualization ${
    state
     ? "problemPrevisualization__state--true"
     : "problemPrevisualization__state--false"
   }`}>
   <MdCheckCircle size="30" />
   <a href="#" className="link">
    {IdProblem}
   </a>
  </li>
 );
};

export default ProblemPrevisualization;
