import React from "react";

// Stlyes
import "../../assets/styles/components/ProblemStatusInformation/ProblemStatusInformation.scss";

// Components
import PostHeader from "../PostHeader/PostHeader";
import FormStep from "../FormStep/FormStep";
import ProfileWorkerCard from "../ProfileWorkerCard/ProfileWorkerCard";

const ProblemStatusInformation = ({
 isWorker,
 problemUser,
 problemStatus = true,
 problemWorker = "@Alan",
 workersApplied = [],
}) => {
 const RenderStatus = () => {
  if (problemStatus)
   return (
    <span className="problem-status-information__status-message">
     The user {problemWorker} is solving the problem.
    </span>
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

   {!isWorker && RenderWorkers()}
  </article>
 );
};

export default ProblemStatusInformation;
