import React, { useState } from "react";

// Redux
import { useSelector } from 'react-redux'

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import DealsComponent from "../../components/Deals/Deals";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";
import CreatePostProblem from "../../components/CreatePostProblem/CreatePostProblem";

// Containers
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import FeedContainer from "../../container/FeedContainer/FeedContainer";

const Deals = () => {


 // Handle Modal Create Problem
 const [isModalProblem, setIsModalProblem] = useState(false);
 const actionProblem = () => setIsModalProblem(!isModalProblem);

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
       <CreatePostProblem onCancel={actionProblem} />
      </Modal>
     </ModalContainer>
    )}
   </ChangeView>
  </HeaderContainer>
 );
};

export default Deals;
