import React from "react";
import { useHistory } from "react-router-dom";
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
 const history = useHistory();
 const goToDetail = () => history.push(`/detail/problem/${idProblem}`);

 return (
  <article className="problem-status-card">
   <div className="problem-status-card__header">
    <h3 onClick={goToDetail}>{nameProblem}</h3>
    <small>{idProblem}</small>
    <ButtonAction
     icon={MdRemoveRedEye}
     className="problem-status-card__action"
     onClick={goToDetail}
    />
   </div>

   <div className="problem-status-card__status">
    <ProblemStatus status={statusProblem} />
   </div>
  </article>
 );
};

export default ProblemStatusCard;
