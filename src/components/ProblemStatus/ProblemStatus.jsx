import React from "react";
import { MdCheck, MdErrorOutline } from "react-icons/md";

import "../../assets/styles/components/ProblemStatus/ProblemStatus.scss";

const ProblemStatus = ({ status }) => {
 const defineRender = (isSolving) => {
  if (isSolving != false) {
   return (
    <>
     <MdErrorOutline size="24" />
     <small>Solving</small>
    </>
   );
  } else if (isSolving != true) {
   return (
    <>
     <MdCheck size="24" />
     <small>Solved</small>
    </>
   );
  }
 };

 return (
  <div
   className={`problem-status ${
    status ? "problem-status__state--false" : "problem-status__state--true"
   }`}>
   {defineRender(status)}
  </div>
 );
};

export default ProblemStatus;
