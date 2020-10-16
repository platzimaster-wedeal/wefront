import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { GET_PROBLEMS } from "../../redux/types/Problems/ProblemsTypes";
import { SET_CONNECTIONS } from "../../redux/types/Auth/ProfileTypes";


// Services
import { getConnections } from "../../services/AuthService/profileService";
import { createProblem, getProblems } from "../../services/ProblemsService/problemsService";


// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import ConnectionsCards from "../../components/ConnetionsCards/ConnectionsCards";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";
import ModalMessage from "../../components/ModalMessage/ModalMessage";
import Loading from "../../components/Loading/Loading";
import CreatePostProblem from "../../components/CreatePostProblem/CreatePostProblem";

// Containers
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import FeedContainer from "../../container/FeedContainer/FeedContainer";

const Problems = () => {
 const history = useHistory();

 // ----------------- Redux state  -----------------
 const { id } = useSelector((state) => state.AuthReducer);
 const { connections } = useSelector((state) => state.ProfileReducer);
 const { problems } = useSelector((state) => state.ProblemsReducer);

// ----------------- GET PROBLEMS  -----------------
 const [isLoadingProblems, setIsLoadingProblems] = useState(false)
 const [isErrorProblems, setIsErrorProblems] = useState(null);
 const dispatch = useDispatch();

 useEffect(() => {
   const getData = async () => {
     try {
       setIsLoadingProblems(true)
       const data = await getProblems()
       dispatch({type: GET_PROBLEMS, payload: data.body})

       const data_connections = await getConnections(id);
       dispatch({type: SET_CONNECTIONS, payload: data_connections.body})
       setIsLoadingProblems(false)
     } catch(err) {
       setIsLoadingProblems(false)
       setIsErrorProblems(err)
     }
   }

   if(problems.length === 0) {
     getData()
   }
   
 }, [problems, connections, id])

 // ----------------- Handle Create problem -----------------
 const [isLoading, setIsLoading] = useState(false);

 const [isCreated, setIsCreated] = useState(false);
 const onCreated = () => history.push("/user/deals");
 const [isError, setIsError] = useState(null);
 const onError = () => {
  setIsError(null);
 };

 const [isModalProblem, setIsModalProblem] = useState(false);
 const actionProblem = () => setIsModalProblem(!isModalProblem);

 const onCreateProblem = async (data) => {
  try {
   setIsLoading(true);
   const resp = await createProblem(data);
   setIsCreated(true);
   setIsLoading(false);
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
    SecondView={<ConnectionsCards connections={connections} />}
    firstViewTitle="Problems"
    secondViewTitle="Connections">
    <FeedContainer
     strategyAction={actionProblem}
     type="problem"
     data={problems}
    />
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
    {isLoadingProblems && (
     <ModalContainer>
      <Modal title="Getting Problems">
        <Loading />
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
   </ChangeView>
  </HeaderContainer>
 );
};

export default Problems;
