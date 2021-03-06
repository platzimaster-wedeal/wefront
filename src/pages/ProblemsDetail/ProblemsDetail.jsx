import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useRequestGet } from "../../hooks/useRequestGet/useRequestGet";

// Services
import {
 getProblem,
 applyToProblem,
} from "../../services/ProblemsService/problemsService";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
 GET_PROBLEM,
 APPLY_PROBLEM,
} from "../../redux/types/Problems/ProblemsTypes";

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import FeedDetail from "../../components/FeedDetail/FeedDetail";
import ConnectionsCards from "../../components/ConnetionsCards/ConnectionsCards";
import PostProblemDetail from "../../components/PostProblemDetail/PostProblemDetail";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";
import ModalMessage from "../../components/ModalMessage/ModalMessage";
import Loading from "../../components/Loading/Loading";

// Containers
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";

const ProblemsDetail = () => {
 const history = useHistory();

 // ----------------- Redux state
 const { id } = useSelector((state) => state.AuthReducer);
 const { currentProblem } = useSelector((state) => state.ProblemsReducer);
 const { connections } = useSelector((state) => state.ProfileReducer);
 const { employeer, id_employee } = useSelector(
  (state) => state.ProfileReducer
 );

 // ----------------- Handle GET problem -----------------
 const { idProblem } = useParams();
 const getProblemDispatch = useDispatch();
 const [isLoading, setIsLoading] = useState(true);
 const [isError, setIsError] = useState(null);
 useEffect(() => {
  const handleGetProblem = async () => {
   try {
    const resp = await getProblem(idProblem);
    getProblemDispatch({ type: GET_PROBLEM, payload: { ...resp.body } });
    setIsLoading(false);
   } catch (err) {
    setIsError(err);
    setIsLoading(false);
    console.error(err);
   }
  };
  handleGetProblem();
 }, [isLoading, isError, idProblem]);

 // ----------------- Handle Apply Problem -----------------
 const [applyProblem, setApplyProblem] = useState({});
 const [isLoadingApply, setIsLoadingApply] = useState(false);
 const [isApplied, setIsApplied] = useState(false);
 const onApplied = () => {
  setIsApplied(false);
  history.push("/user/deals");
 };

 const [isErrorApply, setIsErrorApply] = useState(null);
 const onError = () => {
  setIsErrorApply(null);
  history.push("/home");
 };
 const onApply = async () => {
  try {
   setIsLoadingApply(true);
   const resp = await applyToProblem(applyProblem);
   setIsLoadingApply(false);
   setIsApplied(true);
  } catch (err) {
   setIsErrorApply(err);
   setIsLoadingApply(false);
   console.error(err);
  }
 };
 // ----------------- RENDER OF THE COMPONENT -----------------
 return (
  <HeaderContainer>
   <ChangeView
    SecondView={<ConnectionsCards connections={connections} />}
    firstViewTitle="About Problem"
    secondViewTitle="Connections">
    <FeedDetail title="About The Problem">
     <PostProblemDetail
      idUser={id || window.localStorage.getItem("id")}
      idEmployee={id_employee}
      problem={currentProblem}
      isLoading={isLoading}
      isError={isError}
      setDataApply={setApplyProblem}
      idJobOffer={currentProblem.id_employer_job_offer}
      onApply={onApply}
     />
    </FeedDetail>
   </ChangeView>
   {isErrorApply && (
    <ModalContainer>
     <Modal title="Oops!" onClose={onError}>
      <ModalMessage
       type="error"
       message="We sorry! Something wrong happen!"
       onClose={onError}
      />
     </Modal>
    </ModalContainer>
   )}
   {isLoadingApply && (
    <ModalContainer>
     <Modal title="Apply">
      <>
       <Loading />
       <span>Wait a moment while we validate your information :D</span>
      </>
     </Modal>
    </ModalContainer>
   )}
   {isApplied && (
    <ModalContainer>
     <Modal title="Awesome!" onClose={onApplied}>
      <ModalMessage
       type="Great"
       message="Congrats! You apply to his problem! Wait for the response :D"
       onClose={onApplied}
      />
     </Modal>
    </ModalContainer>
   )}
  </HeaderContainer>
 );
};

export default ProblemsDetail;
