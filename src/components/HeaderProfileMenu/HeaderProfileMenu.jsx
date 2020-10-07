import React, { useState } from "react";
import { MdExitToApp } from "react-icons/md";
import "../../assets/styles/components/HeaderProfileMenu/HeaderProfileMenu.scss";

import HeaderProfileMenuNav from "./HeaderProfileMenuNav";

const HeaderProfileMenu = ({ profileName, profileImg, profileType, onLogout }) => {
 const [displayMenu, setDisplayMenu] = useState(false);

 const handleDisplay = () => {
  setDisplayMenu(!displayMenu);
 };

 return (
  <div className="HeaderProfileMenu__container_all">
    <figure className="HeaderProfileMenu--profileImg">
      <img
        src={profileImg}
        alt={profileName}
        onClick={handleDisplay}
    />
    </figure>
   <div
    className={`HeaderProfileMenu__container_nav ${
     displayMenu && "HeaderProfileMenu__container_nav--active"
    }`}>
    <HeaderProfileMenuNav profileName={profileName} profileType={profileType} onLogout={onLogout} />
   </div>
  </div>
 );
};
export default HeaderProfileMenu;
