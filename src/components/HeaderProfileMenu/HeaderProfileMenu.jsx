import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdExitToApp } from "react-icons/md";
import "../../assets/styles/components/HeaderProfileMenu/HeaderProfileMenu.scss";

const HeaderProfileMenu = ({ profileName, profileImg, profileType }) => {
 const [displayNemu, setDisplayMenu] = useState(false);

 const handleDisplayOn = () => {
  setDisplayMenu(true);
 };

 const handleDisplayOff = () => {
  setDisplayMenu(false);
 };

 const ProfileImage = (
  <img
   className="HeaderProfileMenu--profileImg"
   src={profileImg}
   alt={profileImg}
   onClick={() => handleDisplayOn()}
  />
 );

 const ProfileMenuContent = (
  <div className="HeaderProfileMenu__container">
   <div className="HeaderProfileMenu__name--profileImg">
    <h2 className="HeaderProfileMenu--name">
     {profileName}
     <br />
     <span>{profileType}</span>
    </h2>
    <img
     className="HeaderProfileMenu--profileImg"
     src={profileImg}
     alt={profileImg}
     onClick={() => handleDisplayOff()}
    />
   </div>
   <hr />
   <nav className="HeaderProfileMenu__nav">
    <ul className="HeaderProfileMenu__nav--ul">
     <li>
      <Link className="nav__ul--link" to="/draw">
       Home
      </Link>
     </li>
     <li>
      <Link className="nav__ul--link" to="/draw">
       My Deals
      </Link>
     </li>
     <li>
      <Link className="nav__ul--link" to="/draw">
       Problems
      </Link>
     </li>
     <li>
      <Link className="nav__ul--link" to="/draw">
       Profile
      </Link>
     </li>
     <li>
      <Link className="nav__ul--link" to="/draw">
       Configutation
      </Link>
     </li>
    </ul>
   </nav>
   <div className="HeaderProfileMenu__logout">
    <MdExitToApp />
    <p>Logout</p>
   </div>
   <div className="HeaderProfileMenu__footer">
    <p className="HeaderProfileMenu__footer--terms">
     <Link to="/draw">Terms of service</Link>
    </p>
    <p className="HeaderProfileMenu__footer--terms">
     © Copyright 2020 - WeDeal{" "}
    </p>
   </div>
   <h1 className="HeaderProfileMenu__footer--logo">W</h1>
  </div>
 );

 return <div>{displayNemu ? ProfileMenuContent : ProfileImage}</div>;
};
export default HeaderProfileMenu;
