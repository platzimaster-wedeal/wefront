import React, { useEffect, useState } from "react";

// Hooks
import { useInputForm } from "../../hooks/useInputForm/useInputForm";
import { useModal } from "../../hooks/useModal/useModal";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { APPLY_PROBLEM } from "../../redux/types/Problems/ProblemsTypes";

// Services
import { postScoreUser } from "../../services/UserService/userService";
import {
 getJobOffer,
 getWorkersJob,
 getFullProblem,
} from "../../services/ProblemsService/problemsService";

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
import ModalMessage from "../ModalMessage/ModalMessage";

const PostProblemDetail = ({
 problem,
 idJobOffer,
 setDataApply,
 idUser,
 idEmployee,
 isError = null,
 isLoading = true,
 onApply,
}) => {
 const { id } = useSelector((state) => state.AuthReducer);

 // ----------------------- Validating the user -----------------------
 const [isUser, setIsUser] = useState(false);
 useEffect(() => {
  if (Number(problem.id_user) === Number(id)) {
   setIsUser(true);
  }
 }, [isUser, idUser, problem]);

 // ----------------------- Modal state hook -----------------------
 const [isOpenStatus, setIsOpenStatus] = useModal(false);

 //  ---------------- Handle apply ----------------
 let dataApplyProblem = {
  id_employee: idEmployee,
  id_employers_job_offer: idJobOffer,
  hired: 0,
 };
 const [isOpenApply, setIsOpenApply] = useModal(false);
 const [price, setPrice] = useInputForm(0);
 useEffect(() => {
  dataApplyProblem = {
   ...dataApplyProblem,
   price: price,
  };
  setDataApply(dataApplyProblem);
 }, [price]);

 // ---------------- Handle on qualificate to the employe ----------------
 const [jobOffer, setJobOffer] = useState({});
 const [fullJob, setFullJob] = useState({});
 useEffect(() => {
  const getOfferInformation = async () => {
   try {
    const fullProblem = await getFullProblem(problem.id);
    setFullJob(fullProblem.body);
    const data = await getJobOffer(problem.id_employer_job_offer);
    setJobOffer({ ...data.body });
   } catch (err) {
    console.error(err);
   }
  };
  if (idJobOffer || problem.id_employer_job_offer) {
   getOfferInformation();
  }
 }, [problem.id_employer_job_offer, idJobOffer]);
 const [dataQualificate, setDataQualificate] = useState({});
 const [isLoadingScore, setIsLoadingScore] = useState(false);
 const [isQualificated, setIsQualificated] = useState(false);
 const onQualificate = async () => {
  const dataScore = {
   ...dataQualificate,
   id_employer: idUser,
   id_employee: 15,
  };
  try {
   setIsLoadingScore(true);
   const resp = await postScoreUser(dataScore);
   setIsQualificated(true);
   setIsLoadingScore(false);
  } catch (err) {
   setIsLoadingScore(false);
   console.error(err);
  }
 };

 // ----------------------- Get workers of job offers -----------------------
 const [workersJob, setWorkersJob] = useState({});
 const { id_employer } = useSelector((state) => state.ProfileReducer);
 useEffect(() => {
  const getWorkers = async () => {
   try {
    const data = await getWorkersJob(id_employer);
    setWorkersJob(data.body);
   } catch (err) {}
  };
  if (id_employer) {
   getWorkers();
  }
 }, [id_employer]);

 // ---------------- defining UI of button action ----------------
 const defineAction = () => {
  if (problem.employer_job_offer_status.trim() === "available")
   return (
    <PostProblemStatus status={problem.employer_job_offer_status.trim()} />
   );
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
   <PostProblemDescription description={problem.long_description} />
   <PostProblemRequirements requirements={problem.requeriments} />
   <PostProblemSchedule schedule={problem.schedule} />

   {!isUser && problem.employer_job_offer_status ? (
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
   {isUser && problem.employer_job_offer_status.trim() === "available" && (
    <Button active onClick={setIsOpenStatus}>
     {" "}
     Status{" "}
    </Button>
   )}
  </>
 );

 // -------------------------------- RENDER OF THE COMPONENT --------------------------------
 return (
  <article className="post-problem-detail">
   {isError ? (
    <span className="post-problem-detail__error">{isError}</span>
   ) : isLoading ? (
    <Loading />
   ) : (
    RenderDetail()
   )}

   {/* // ---------------- Modal Status problem */}
   {isOpenStatus && (
    <ModalContainer>
     <Modal title="Status Of Problem" onClose={setIsOpenStatus}>
      <ProblemStatusInformation
       isUser={isUser}
       picture={problem.user_avatar}
       problemEmployer={problem.employer_name}
       problemWorker={"@"}
       setInformation={setDataQualificate}
       onQualificate={onQualificate}
       workersApplied={workersJob}
      />
     </Modal>
    </ModalContainer>
   )}

   {/* // ---------------- Modal Apply problem */}
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

   {/* // ---------------- Modal loading score */}
   {isLoadingScore && (
    <ModalContainer>
     <Modal title="Scoring the solution!" onClose={setIsOpenApply}>
      <>
       <Loading />
       <span>Wait a moment while we validate your data</span>
      </>
     </Modal>
    </ModalContainer>
   )}
   {/* // ---------------- Modal score problem and worker */}
   {isQualificated && (
    <ModalContainer>
     <Modal title="Scoring the solution!" onClose={setIsOpenApply}>
      <ModalMessage
       type="great"
       message="Awesome! The problem was solved and scored!"
      />
     </Modal>
    </ModalContainer>
   )}
  </article>
 );
};

export default PostProblemDetail;
