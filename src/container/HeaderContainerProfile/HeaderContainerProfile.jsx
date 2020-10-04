import React from "react";

// Redux
import { useSelector } from "react-redux";

// Styles
import "../../assets/styles/containers/HeaderContainerProfile/HeaderContainerProfile.scss";

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";

const HeaderContainerProfile = ({ children }) => {

  const profile = useSelector(state => state.ProfileReducer)
 return (
  <div className="header-container-profile">
   <HeaderSearch user={profile}/>
   {children}
  </div>
 );
};

export default HeaderContainerProfile;
