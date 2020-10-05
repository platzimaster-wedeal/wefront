import React, {useState} from "react";
import { useSelector } from 'react-redux'


// Layouts
import ChangeViewProfile from "../../layouts/ChangeViewProfile/ChangeViewProfile";

// Components
import FeedDetail from "../../components/FeedDetail/FeedDetail";
import ConnectionsCards from "../../components/ConnetionsCards/ConnectionsCards";
import ProfileConfigure from "../../components/ProfileConfigure/ProfileConfigure";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";

// Containers
import HeaderContainerProfile from "../../container/HeaderContainerProfile/HeaderContainerProfile";
import UserInformationContainer from "../../container/UserInformationContainer/UserInformationContainer";

const UserConfigure = () => {

// Redux state
  const { id } = useSelector(state => state.AuthReducer)
  const profile = useSelector(state => state.ProfileReducer)
  const { profilePosts } = useSelector(state => state.PostsReducer)

 return (
  <HeaderContainerProfile>
   <ProfileHeader isUser isProfile user={profile}/>
   <ChangeViewProfile
    SecondView={
     <FeedDetail title="Configuration">
      <ProfileConfigure isWorker={profile.employeer} user={profile} />
     </FeedDetail>
    }
    firstViewTitle="General Information"
    secondViewTitle="Configure">
    <UserInformationContainer isProfile user={profile} />
   </ChangeViewProfile>
  </HeaderContainerProfile>
 );
};

export default UserConfigure;
