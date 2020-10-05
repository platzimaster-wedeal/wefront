import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

// Redux
import { useSelector } from 'react-redux'

// Services
import { createProblem } from "../../services/ProblemsService/problemsService"

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
  // Redux state
  const { problems, newProblem } = useSelector(state => state.ProblemsReducer)

  // Handle Create Problem
  const [isLoading, setIsLoading] = useState(false)
  const [isCreated, setIsCreated] = useState(false)
  const onCreated = () => history.push('/user/deals')
  const [isError, setIsError] = useState(null)
  const onError = () => {
    setIsError(null)
  }

  const [isModalProblem, setIsModalProblem] = useState(false);
  const actionProblem = () => setIsModalProblem(!isModalProblem);

 const onCreateProblem = async () => {
   try {
    setIsLoading(true)
    const resp = await createProblem(newProblem)
   } catch(err) {
     setIsError(err)
     setIsLoading(false)
     console.error(err)
   }

 }

 return (
  <HeaderContainer>
   <ChangeView
    SecondView={<DealsComponent deals={[1, 2, 3]} />}
    firstViewTitle="Current Problems"
    secondViewTitle="Deals">
    <FeedContainer strategyAction={actionProblem} type="problem" />
    {isModalProblem && (
     <ModalContainer>
      <Modal title="Creata a new Problem" onClose={actionProblem}>
       <CreatePostProblem onCancel={actionProblem} onCancel={actionProblem} onCreate={onCreateProblem}/>
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
        <Modal title="Awesome" >
          <ModalMessage type="great" message="Great! You problem was created succesful!" onClose={onCreated} />
        </Modal>
     </ModalContainer>
    )}
    {isError && (
     <ModalContainer>
        <Modal title="Oops!">
          <ModalMessage type="error" message="We sorry something went wrong" onClose={onError} />
        </Modal>
     </ModalContainer>
    )}
   </ChangeView>
  </HeaderContainer>
 );
};

export default Deals;
