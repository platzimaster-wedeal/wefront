import React, { useState } from "react";

// Layouts
import ChangeViewProfile from "../../layouts/ChangeViewProfile/ChangeViewProfile";

// Components
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";
import CreatePostShare from "../../components/CreatePostShare/CreatePostShare";

// Containers
import HeaderContainerProfile from "../../container/HeaderContainerProfile/HeaderContainerProfile";
import FeedContainer from "../../container/FeedContainer/FeedContainer";
import UserInformationContainer from "../../container/UserInformationContainer/UserInformationContainer";

const UserProfile = () => {
 // Handle modal share
 const [isModalShare, setIsModalShare] = useState(false);
 const actionShare = () => setIsModalShare(!isModalShare);

 return (
  <HeaderContainerProfile>
   <ProfileHeader />
   <ChangeViewProfile
    SecondView={<FeedContainer strategyAction={actionShare} type="share" />}
    firstViewTitle="Posts"
    secondViewTitle="Information">
    <UserInformationContainer />
    {isModalShare && (
     <ModalContainer>
      <Modal title="Share Something!" onClose={actionShare}>
       <CreatePostShare />
      </Modal>
     </ModalContainer>
    )}
   </ChangeViewProfile>
  </HeaderContainerProfile>
 );
};

export default UserProfile;
