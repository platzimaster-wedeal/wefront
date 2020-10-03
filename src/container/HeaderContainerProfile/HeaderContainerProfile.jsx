import React from "react";

// Styles
import "../../assets/styles/containers/HeaderContainerProfile/HeaderContainerProfile.scss";

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";

const HeaderContainerProfile = ({ children }) => {
 return (
  <div className="header-container-profile">
   <HeaderSearch />
   {children}
  </div>
 );
};

export default HeaderContainerProfile;
