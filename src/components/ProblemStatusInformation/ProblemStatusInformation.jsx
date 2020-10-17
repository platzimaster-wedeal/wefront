import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

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
 problemStatus = true,
 problemEmployer = "",
 employerAvatar,
 problemWorker,
 workersApplied = [],
 setInformation,
 onQualificate,
 setIdWorker
}) => {
 // const profile = useSelector(state => state.ProfileReducer)

 const [profile, setProfile] = useState({});

 // ---------------- Handle Problem Solved
 const [isProblemSolved, setIsProblemSolved] = useState(false);

 const handleProblemSolved = () => setIsProblemSolved(!isProblemSolved);

 // ---------------- Define the status of the problem ----------------
 const RenderStatus = () => {
  if (problemStatus !== "solving")
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

  const [isSelectedEmployee, setIsSelectedEmployee] = useState(false)
 const RenderWorkers = () => {
  return (
   <FormStep title="Workers That Applied">
    {workersApplied && workersApplied.length > 0 ? (
     workersApplied.map((worker, i) => (
      <ProfileWorkerCard
       id={worker.id_user_employee }
       name={worker.employee_firstname}
       picture={worker.avatar}
       onClick={() => {
         setIsProblemSolved(!isProblemSolved)
         setIdWorker(worker.employee_postulated)
         setIsSelectedEmployee(true)
       }}
       key={i}
      />
     ))
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
   <PostHeader name={problemEmployer} picture={employerAvatar} />
   <FormStep title="Current Status">{RenderStatus()}</FormStep>

   {isUser && problemStatus && !isSelectedEmployee && RenderWorkers()}

   {isUser && isProblemSolved && (
    <FormStep title="Qualification Of Worker">
     <ProblemQualification
      setInformation={setInformation}
      onQualificate={onQualificate}
     />
    </FormStep>
   )}
  </article>
 );
};

export default ProblemStatusInformation;
