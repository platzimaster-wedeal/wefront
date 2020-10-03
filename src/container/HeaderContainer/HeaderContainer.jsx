import React from "react";

// Redux
import { useSelector } from "react-redux";

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";

const HeaderContainer = ({ children }) => {

  const profile = useSelector(state => state.ProfileReducer)

 return (
  <div>
   <HeaderSearch user={profile}/>
   {children}
  </div>
 );
};

export default HeaderContainer;
