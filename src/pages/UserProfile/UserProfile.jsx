import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

// Reux
import { useSelector } from 'react-redux'

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

// Redux state
  const [isProfile, setIsProfile] = useState(false) 
  const { idUser } = useParams()
  const { id } = useSelector(state => state.AuthReducer)
  const profile = useSelector(state => state.ProfileReducer)
  const user = useSelector(state => state.UserReducer)
  const { profilePosts } = useSelector(state => state.PostsReducer)

  // Handle validation of user
  useEffect(() => {
    
    if(Number(idUser)) {
      if(idUser === id) setIsProfile(true)
    } else setIsProfile(true)

  }, [id, profile, isProfile])

 // Handle modal share
 const [isModalShare, setIsModalShare] = useState(false);
 const actionShare = () => setIsModalShare(!isModalShare);

 return (
  <HeaderContainerProfile>
   <ProfileHeader isUser={isProfile} user={isProfile ? profile : user} />
   <ChangeViewProfile
    SecondView={<FeedContainer strategyAction={actionShare} type="share" data={profilePosts} />}
    firstViewTitle="Posts"
    secondViewTitle="Information">
    <UserInformationContainer isProfile={isProfile} user={isProfile ? profile : user} />
    {isModalShare && (
     <ModalContainer>
      <Modal title="Share Something!" onClose={actionShare}>
       <CreatePostShare 
        name={profile.first_name} 
        avatar={profile.avatar} 
        onCancel={actionShare} 
       />
      </Modal>
     </ModalContainer>
    )}
   </ChangeViewProfile>
  </HeaderContainerProfile>
 );
};

export default UserProfile;
