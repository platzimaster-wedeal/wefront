import React from "react";

// Styles
import "../../assets/styles/containers/UserInformationContainer/UserInformationContainer.scss";

// Components
import ProfileProblemsContainer from "../../components/ProfileProblems/ProfileProblemsContainer";
import GeneralInformation from "../../components/GeneralInformation/GeneralInformation";

const UserInformationContainer = ({ isProfile, user = {}, problems = [] }) => {

 return (
  <div className="user-information-container">
   <GeneralInformation
    isProfile={isProfile}
    username={user.first_name}
    followers={user.followers}
    location={user.country}
   />
   <ProfileProblemsContainer isProfile={isProfile} problems={problems}  />
  </div>
 );
};

export default UserInformationContainer;
