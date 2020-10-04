import React from "react";

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

const PostProblemDetail = ({ problem, isWorker, isError = null, isLoading = true }) => {


console.log(isError, 'HEEEELLLOOOOOO')

 // Modal state hook
 const [isOpenStatus, setIsOpenStatus] = useModal(false);
 const [isOpenApply, setIsOpenApply] = useModal(false);

 const defineAction = () => {
  if (problem.state) return <PostProblemStatus status={isSolving} />;

  if (isWorker && !problem.state)
   return (
    <Button active onClick={setIsOpenApply}>
     Apply!
    </Button>
   );
 };

  const RenderDetail = () => (
    <>
      <PostHeader name={problem.employeer_name}/>
      <PostProblemPrevisualization />
      <PostProblemDescription />
      <PostProblemRequirements />
      <PostProblemSchedule />
      {!problem.state ? (
        <>
        <PostProblemPayment />
        </>
      ) : (
        <PostProblemPayment agreed agreedPrice={922} />
      )}

      <div className="post-problem-detail__actions">{defineAction()}</div>
      {!isWorker && !problem.state && <Button active>Edit</Button>}
      {!isWorker && problem.state && (
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
      <ProblemStatusInformation />
     </Modal>
    </ModalContainer>
   )}
   {isOpenApply && (
    <ModalContainer>
     <Modal title="Apply To Problem!" onClose={setIsOpenApply}>
      <CreateApplyPostProblem />
     </Modal>
    </ModalContainer>
   )}
  </article>
 );
};

export default PostProblemDetail;
