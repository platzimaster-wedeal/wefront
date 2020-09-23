import React from "react";
import { MdCheckCircle, MdErrorOutline } from "react-icons/md";

import "../../assets/styles/components/ProblemStatus/ProblemStatus.scss";

const ProblemStatus = ({ status = true }) => {
 return (
  <div
   className={`problem-status ${
    status ? "problem-status__state--true" : "problem-status__state--true"
   }`}>
   {status === true ? (
    <>
     <MdCheckCircle size="30" />
     <small>Solved</small>
    </>
   ) : (
    <>
     <MdErrorOutline size="30" />
     <small>Solving</small>
    </>
   )}
  </div>
 );
};

export default ProblemStatus;
