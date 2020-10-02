import React from "react";

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";

const HeaderContainer = ({ children }) => {
 return (
  <div>
   <HeaderSearch />
   {children}
  </div>
 );
};

export default HeaderContainer;
