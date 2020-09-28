import React from "react";
import { MdCheck, MdErrorOutline } from "react-icons/md";

import "../../assets/styles/components/ProblemStatus/ProblemStatus.scss";

const ProblemStatus = ({ status = true }) => {
 return (
  <div
   className={`problem-status ${
    status ? "problem-status__state--true" : "problem-status__state--true"
   }`}>
   {status === true ? (
    <>
     <MdCheck size="24" />
     <small>Solved</small>
    </>
   ) : (
    <>
     <MdErrorOutline size="24" />
     <small>Solving</small>
    </>
   )}
  </div>
 );
};

export default ProblemStatus;
