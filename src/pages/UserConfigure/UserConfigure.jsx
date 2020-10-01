import React from "react";

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import FeedDetail from "../../components/FeedDetail/FeedDetail";
import ConnectionsCards from "../../components/ConnetionsCards/ConnectionsCards";
import ProfileConfigure from "../../components/ProfileConfigure/ProfileConfigure";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";

// Containers
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import UserInformationContainer from "../../container/UserInformationContainer/UserInformationContainer";

const UserConfigure = () => {
 return (
  <HeaderContainer>
   <ProfileHeader isVisitor={true} />
   <ChangeView
    SecondView={<UserInformationContainer />}
    firstViewTitle="General Information"
    secondViewTitle="Configure">
    <FeedDetail>
     <ProfileConfigure />
    </FeedDetail>
   </ChangeView>
  </HeaderContainer>
 );
};

export default UserConfigure;
