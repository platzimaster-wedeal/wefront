import React, { useState } from "react";

// Redux
import { useSelector } from "react-redux";

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import ConnectionsCards from "../../components/ConnetionsCards/ConnectionsCards";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";
import CreatePostProblem from "../../components/CreatePostProblem/CreatePostProblem";

// Containers
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import FeedContainer from "../../container/FeedContainer/FeedContainer";

const Problems = () => {

 // Posts Redux State
  const { profilePosts } = useSelector(state => state.PostsReducer)

 // Handle Modal Create Problem
 const [isModalProblem, setIsModalProblem] = useState(false);
 const actionProblem = () => setIsModalProblem(!isModalProblem);

 return (
  <HeaderContainer>
   <ChangeView
    SecondView={<ConnectionsCards />}
    firstViewTitle="Problems"
    secondViewTitle="Connections">
    <FeedContainer strategyAction={actionProblem} type="problem" data={profilePosts}/>
    {isModalProblem && (
     <ModalContainer>
      <Modal title="Creata a new Problem" onClose={actionProblem}>
       <CreatePostProblem onCancel={actionProblem} />
      </Modal>
     </ModalContainer>
    )}
   </ChangeView>
  </HeaderContainer>
 );
};

export default Problems;
