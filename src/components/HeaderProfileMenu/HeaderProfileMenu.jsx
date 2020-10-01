import React, { useState } from "react";
import { MdExitToApp } from "react-icons/md";
import "../../assets/styles/components/HeaderProfileMenu/HeaderProfileMenu.scss";

import HeaderProfileMenuNav from "./HeaderProfileMenuNav";

const HeaderProfileMenu = ({ profileName, profileImg, profileType }) => {
 const [displayMenu, setDisplayMenu] = useState(false);

 const handleDisplay = () => {
  setDisplayMenu(!displayMenu);
 };

 return (
  <div className="HeaderProfileMenu__container_all">
   <img
    className="HeaderProfileMenu--profileImg"
    src={profileImg}
    alt={profileImg}
    onClick={handleDisplay}
   />
   <div
    className={`HeaderProfileMenu__container_nav ${
     displayMenu && "HeaderProfileMenu__container_nav--active"
    }`}>
    <HeaderProfileMenuNav profileName={profileName} profileType={profileType} />
   </div>
  </div>
 );
};
export default HeaderProfileMenu;
