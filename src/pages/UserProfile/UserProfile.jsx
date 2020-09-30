import React from "react";

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";

// Containers
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import FeedContainer from "../../container/FeedContainer/FeedContainer";
import UserInformationContainer from "../../container/UserInformationContainer/UserInformationContainer";

const UserProfile = () => {
 return (
  <HeaderContainer>
   <ProfileHeader isVisitor={true} />
   <ChangeView
    SecondView={<UserInformationContainer />}
    firstViewTitle="Posts"
    secondViewTitle="Information">
    <FeedContainer />
   </ChangeView>
  </HeaderContainer>
 );
};

export default UserProfile;
