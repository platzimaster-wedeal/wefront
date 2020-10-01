import React from "react";

// Styles
import "../../assets/styles/containers/UserInformationContainer/UserInformationContainer.scss";

// Components
import ProfileProblemsContainer from "../../components/ProfileProblems/ProfileProblemsContainer";
import GeneralInformation from "../../components/GeneralInformation/GeneralInformation";

const UserInformationContainer = () => {
 return (
  <div className="user-information-container">
   <GeneralInformation />
   <ProfileProblemsContainer />
  </div>
 );
};

export default UserInformationContainer;
