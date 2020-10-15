import React from "react";
import { useHistory } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { DELETE_AUTH } from "../../redux/types/Auth/AuthTypes";

// Styles
import "../../assets/styles/containers/HeaderContainerProfile/HeaderContainerProfile.scss";

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";

const HeaderContainerProfile = ({ children }) => {
 const history = useHistory();

 const profile = useSelector((state) => state.ProfileReducer);

 const onLogout = () => {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("id");
  logoutDispatch({ type: DELETE_AUTH });
  history.push("/");
 };

 return (
  <div className="header-container-profile">
   <HeaderSearch user={profile} onLogout={onLogout} />
   {children}
  </div>
 );
};

export default HeaderContainerProfile;
