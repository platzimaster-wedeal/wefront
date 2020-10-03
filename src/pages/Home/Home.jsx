import React, { useState } from "react";

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import ConnectionsCards from "../../components/ConnetionsCards/ConnectionsCards";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";
import CreatePostShare from "../../components/CreatePostShare/CreatePostShare";

// Containers
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import FeedContainer from "../../container/FeedContainer/FeedContainer";

const Home = () => {
 // handle the modal of create share
 const [isModalShare, setIsModalShare] = useState(false);
 const actionShare = () => setIsModalShare(!isModalShare);

 return (
  <HeaderContainer>
   <ChangeView
    SecondView={<ConnectionsCards />}
    firstViewTitle="Home"
    secondViewTitle="Connections">
    <FeedContainer strategyAction={actionShare} type="share" />
    {isModalShare && (
     <ModalContainer>
      <Modal title="Share Something!" onClose={actionShare}>
       <CreatePostShare onCancel={actionShare} />
      </Modal>
     </ModalContainer>
    )}
   </ChangeView>
  </HeaderContainer>
 );
};

export default Home;
