import React from "react";
import { MdRemoveRedEye } from "react-icons/md";

// Styles
import "../../assets/styles/components/ProblemStatusCard/ProblemStatusCard.scss";

// Components
import ProblemStatus from "../ProblemStatus/ProblemStatus";
import ButtonAction from "../Buttons/ButtonAction";

const ProblemStatusCard = ({
 statusProblem = true,
 idProblem = "#15142",
 nameProblem = "Error with my PC",
}) => {
 return (
  <article className="problem-status-card">
   <div className="problem-status-card__header">
    <h3>{nameProblem}</h3>
    <small>{idProblem}</small>
    <ButtonAction
     icon={MdRemoveRedEye}
     className="problem-status-card__action"
    />
   </div>

   <div className="problem-status-card__status">
    <ProblemStatus status={statusProblem} />
   </div>
  </article>
 );
};

export default ProblemStatusCard;
