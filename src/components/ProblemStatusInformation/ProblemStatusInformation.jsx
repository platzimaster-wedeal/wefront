import React, { useState } from "react";

// Stlyes
import "../../assets/styles/components/ProblemStatusInformation/ProblemStatusInformation.scss";

// Components
import PostHeader from "../PostHeader/PostHeader";
import FormStep from "../FormStep/FormStep";
import ProfileWorkerCard from "../ProfileWorkerCard/ProfileWorkerCard";
import ProblemQualification from "../ProblemQualification/ProblemQualification";
import Button from "../Buttons/Button";
import ModalContainer from "../Modals/ModalContainer";
import Modal from "../Modals/Modal";

const ProblemStatusInformation = ({
 isUser,
 problemUser,
 problemStatus = true,
 problemWorker = "@Alan",
 workersApplied = [],
}) => {
 // Handle Problem Solved
 const [isProblemSolved, setIsProblemSolved] = useState(false);

 const handleProblemSolved = () => setIsProblemSolved(!isProblemSolved);

 // Define the status of the problem
 const RenderStatus = () => {
  if (problemStatus)
   return (
    <>
     <span className="problem-status-information__status-message">
      The user {problemWorker} is solving the problem.
     </span>
     {isUser && !isProblemSolved && (
      <Button active onClick={handleProblemSolved}>
       Problem Solved
      </Button>
     )}
    </>
   );

  return (
   <span className="problem-status-information__status-message">
    The problem is still open!
   </span>
  );
 };

 const RenderWorkers = () => {
  return (
   <FormStep title="Workers That Applied">
    {workersApplied && workersApplied.length > 0 ? (
     workersApplied.map((worker, i) => <ProfileWorkerCard key={i} />)
    ) : (
     <span className="problem-status-information__workers-message">
      No workers have come forward yet
     </span>
    )}
   </FormStep>
  );
 };

 return (
  <article className="problem-status-information">
   <PostHeader />
   <FormStep title="Current Status">{RenderStatus()}</FormStep>

   {isUser && !problemStatus && RenderWorkers()}

   {isProblemSolved && (
    <FormStep title="Qualification Of Worker">
     <ProblemQualification />
    </FormStep>
   )}
  </article>
 );
};

export default ProblemStatusInformation;
