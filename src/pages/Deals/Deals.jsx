import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { GET_PROFILE_DEALS } from "../../redux/types/Problems/ProblemsTypes";

// Services
import {
 createProblem,
 getProblemUser,
 getFullProblem,
} from "../../services/ProblemsService/problemsService";

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import DealsComponent from "../../components/Deals/Deals";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";
import ModalMessage from "../../components/ModalMessage/ModalMessage";
import Loading from "../../components/Loading/Loading";
import CreatePostProblem from "../../components/CreatePostProblem/CreatePostProblem";

// Containers
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import FeedContainer from "../../container/FeedContainer/FeedContainer";

const Deals = () => {
 // ----------------- Redux state  -----------------
 const { id } = useSelector((state) => state.AuthReducer);
 const { id_employer } = useSelector((state) => state.ProfileReducer);
 const { problems, newProblem, profileProblems } = useSelector(
  (state) => state.ProblemsReducer
 );

 // ----------------- Handle Deals of User -----------------
 const setProfileDeals = useDispatch();

 const [isLoadingDeals, setIsLoadingDeals] = useState(false);
 const [isErrorDeals, setIsErrorDeals] = useState(null);
 const onDealsError = () => {
  setIsLoading(false);
  setIsErrorDeals(false);
 };
 useEffect(() => {
  const getDeals = async () => {
   try {
    setIsLoadingDeals(true);
    const resp_deals = await getProblemUser(id_employer);
    setProfileDeals({ type: GET_PROFILE_DEALS, payload: resp_deals.body });
    setIsLoadingDeals(false);
   } catch (err) {
    setIsLoadingDeals(false);
    setIsErrorDeals(err);
    console.error(err);
   }
  };

  getDeals();

  // if(profileDeals.lenght > 0) {
  //   const deals = profileProblems.filter(problem => problem.state === "solving")
  //   setProfileDeals({type: GET_PROFILE_DEALS, payload: deals })
  // }
 }, []);

 // ----------------- Handle Create of Problem -----------------
 const [isLoading, setIsLoading] = useState(false);
 const [isCreated, setIsCreated] = useState(false);
 const onCreated = () => history.push("/user/deals");
 const [isError, setIsError] = useState(null);
 const onError = () => {
  setIsError(null);
 };

 const [isModalProblem, setIsModalProblem] = useState(false);
 const actionProblem = () => setIsModalProblem(!isModalProblem);

 const onCreateProblem = async () => {
  try {
   setIsLoading(true);
   const resp = await createProblem(newProblem);
   setIsLoading(false);
   setIsCreated(true);
  } catch (err) {
   setIsError(err);
   setIsLoading(false);
   console.error(err);
  }
 };

 // ----------------- RENDER OF THE COMPONENT -----------------
 return (
  <HeaderContainer>
   <ChangeView
    SecondView={<DealsComponent deals={profileProblems} />}
    firstViewTitle="Current Problems"
    secondViewTitle="Deals">
    <FeedContainer
     strategyAction={actionProblem}
     type="problem"
     data={profileProblems}
    />

    {/* Modals */}
    {isModalProblem && (
     <ModalContainer>
      <Modal title="Create a new Problem" onClose={actionProblem}>
       <CreatePostProblem
        onCancel={actionProblem}
        onCancel={actionProblem}
        onCreate={onCreateProblem}
       />
      </Modal>
     </ModalContainer>
    )}
    {isLoading && (
     <ModalContainer>
      <Modal title="Creating a new Problem">
       <>
        <Loading />
        <span>Wait a moment while we save the information :D</span>
       </>
      </Modal>
     </ModalContainer>
    )}
    {isCreated && (
     <ModalContainer>
      <Modal title="Awesome" onClose={onCreated}>
       <ModalMessage
        type="great"
        message="Great! You problem was created succesful!"
        onClose={onCreated}
       />
      </Modal>
     </ModalContainer>
    )}
    {isError && (
     <ModalContainer>
      <Modal title="Oops!" onClose={onError}>
       <ModalMessage
        type="error"
        message="We sorry something went wrong"
        onClose={onError}
       />
      </Modal>
     </ModalContainer>
    )}
    {isLoadingDeals && (
     <ModalContainer>
      <Modal title="Geting Deals">
       <>
        <Loading />
        <span>Wait a moment while we bring the information :D</span>
       </>
      </Modal>
     </ModalContainer>
    )}
    {isErrorDeals && (
     <ModalContainer>
      <Modal title="Geting Deals" onClose={onDealsError}>
       <ModalMessage
        type="error"
        message="We Sorry, something went wrong, try later."
        onClose={onDealsError}
       />
      </Modal>
     </ModalContainer>
    )}
   </ChangeView>
  </HeaderContainer>
 );
};

export default Deals;
