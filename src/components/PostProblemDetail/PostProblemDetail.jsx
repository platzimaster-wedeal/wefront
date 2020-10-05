import React, { useEffect, useState } from "react";

// Hooks
import { useInputForm } from "../../hooks/useInputForm/useInputForm";


import { useDispatch } from "react-redux";
import { APPLY_PROBLEM } from '../../redux/types/Problems/ProblemsTypes'

// Hooks
import { useModal } from "../../hooks/useModal/useModal";

// Styles
import "../../assets/styles/components/PostProblemDetail/PostProblemDetail.scss";

// Components
import PostHeader from "../PostHeader/PostHeader";
import PostProblemDescription from "../PostProblemDescription/PostProblemDescription";
import PostProblemSchedule from "../PostProblemSchedule/PostProblemSchedule";
import PostProblemPayment from "../PostProblemPayment/PostProblemPayment";
import PostProblemPrevisualization from "../PostProblemPrevisualization/PostProblemPrevisualization";
import PostProblemRequirements from "../PostProblemRequirements/PostProblemRequirements";
import SelectDate from "../DatePicker/SelectDate";
import Button from "../Buttons/Button";
import PostProblemStatus from "../PostProblemStatus/PostProblemStatus";
import ProblemStatusInformation from "../ProblemStatusInformation/ProblemStatusInformation";
import CreateApplyPostProblem from "../CreateApplyPostProblem/CreateApplyPostProblem";
import Loading from "../Loading/Loading";

// Modal
import ModalContainer from "../Modals/ModalContainer";
import Modal from "../Modals/Modal";

const PostProblemDetail = ({ problem, idUser, isError = null, isLoading = true, onApply }) => {

  // Validating the user
  const [isUser, setIsUser] = useState(false) 
  useEffect(() => {
    if(problem.id_user === idUser) setIsUser(true)
  }, [isUser, idUser])

 // Modal state hook
 const [isOpenStatus, setIsOpenStatus] = useModal(false);

//  Handle apply
  const setApplyProblem = useDispatch()
  let dataApplyProblem = {
    id_employer: idUser,
    id_job_offer: problem.id,
    status: "solving",
  }
  const [isOpenApply, setIsOpenApply] = useModal(false);
  const [price, setPrice] = useInputForm(0)
  useEffect(() => {
    dataApplyProblem = { 
      ...dataApplyProblem,
      price: price
    } 
    setApplyProblem({type: APPLY_PROBLEM, paylaod: dataApplyProblem })
  }, [price])


// defining UI
 const defineAction = () => {
  if (problem.state) return <PostProblemStatus status={problem.state} />;
  if (!isUser)
   return (
    <Button active onClick={setIsOpenApply}>
     Apply!
    </Button>
   );
 };

  const RenderDetail = () => (
    <>
      <PostHeader 
        name={problem.employer_name}
        avatar={problem.employer_avatar}
        profession={problem.employer_profession}
      />
      <PostProblemPrevisualization 
        title={problem.title}
        idProblem={problem.id}
        short_description={problem.short_description}
        modality={problem.modality}
        location={problem.location}
      />
      <PostProblemDescription 
        description={problem.long_description}
      />
      <PostProblemRequirements 
        requirements={problem.requirements}
      />
      <PostProblemSchedule 
        schedule={problem.schedule}
      />

      {!problem.state ? (
        <>
          <PostProblemPayment 
            salaryMax={problem.salary_range2}
            salaryMin={problem.salary_range1}
            setState={setPrice}
            state={price}
          />
        </>
      ) : (
        <PostProblemPayment agreed agreedPrice={problem.salary_range2} />
      )}

      <div className="post-problem-detail__actions">{defineAction()}</div>
      {/* {isUser && problem.state && <Button active>Edit</Button>} */}
      {isUser && problem.state && (
        <Button active onClick={setIsOpenStatus}>
        {" "}
        Status{" "}
        </Button>
      )}
    </>
  )

 return (
  <article className="post-problem-detail">
    {
      isError ? (<span className="post-problem-detail__error">{isError}</span>) : isLoading ? (<Loading />) : RenderDetail()
    }

   {isOpenStatus && (
    <ModalContainer>
     <Modal title="Status Of Problem" onClose={setIsOpenStatus}>
      <ProblemStatusInformation 
        isUser={isUser}
        problemUser={problem.employer_name}
      />
     </Modal>
    </ModalContainer>
   )}
   {isOpenApply && (
    <ModalContainer>
     <Modal title="Apply To Problem!" onClose={setIsOpenApply}>
      <CreateApplyPostProblem 
        price={price}
        schedule={problem.schedule}
        onCancel={setIsOpenApply}
        onApply={onApply}
      />
     </Modal>
    </ModalContainer>
   )}
  </article>
 );
};

export default PostProblemDetail;
