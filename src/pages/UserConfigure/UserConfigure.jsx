import React from "react";

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
 return (
  <HeaderContainerProfile>
   <ProfileHeader isUser />
   <ChangeViewProfile
    SecondView={
     <FeedDetail title="Configuration">
      <ProfileConfigure isWorker />
     </FeedDetail>
    }
    firstViewTitle="General Information"
    secondViewTitle="Configure">
    <UserInformationContainer />
   </ChangeViewProfile>
  </HeaderContainerProfile>
 );
};

export default UserConfigure;
