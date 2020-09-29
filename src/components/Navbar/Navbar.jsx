import React, { useState, Fragment } from "react";
import { MdNotificationsNone } from "react-icons/md";
import ProfilePicture from "../ProfilePictures/ProfilePicture";
import "../../assets/styles/components/Navbar/Navbar.scss";
import user from "../../assets/static/img/users/user.jpg";

const Navbar = () => {
 const [active, setActive] = useState({
  home: true,
  problems: false,
  deals: false,
  contacts: false,
 });

 const handleHomeClick = () => {
  setActive({
   home: true,
   problems: false,
   deals: false,
   contacts: false,
  });
 };
 const handleProblemClick = () => {
  setActive({
   home: false,
   problems: true,
   deals: false,
   contacts: false,
  });
 };
 const handleDealsClick = () => {
  setActive({
   home: false,
   problems: false,
   deals: true,
   contacts: false,
  });
 };
 const handleContactsClick = () => {
  setActive({
   home: false,
   problems: false,
   deals: false,
   contacts: true,
  });
 };
 return (
  <>
   <nav className="navbar">
    <ul className="navbar__list">
     <li className="navbar__list-item--logo">
      <p>WeDeal </p> <span>W</span>
     </li>
     <li className="navbar__list-item--search">
      <input type="text" />
     </li>
     <li className="navbar__list-item--btnList">
      <button
       onClick={handleHomeClick}
       className={active.home ? "btn-active" : ""}>
       Home
      </button>
      <button
       onClick={handleProblemClick}
       className={active.problems ? "btn-active" : ""}>
       Problems
      </button>
      <button
       onClick={handleDealsClick}
       className={active.deals ? "btn-active" : ""}>
       Deals
      </button>
     </li>
     <li className="navbar__list-item--notification">
      <MdNotificationsNone />
     </li>
     <li className="navbar__list-item--profileImg">
      <ProfilePicture source={user} active />
     </li>
    </ul>
   </nav>
   <nav className="navbar-buttons">
    <button
     onClick={handleHomeClick}
     className={active.home ? "btn-active" : ""}>
     Home
    </button>
    <button
     onClick={handleContactsClick}
     className={active.contacts ? "btn-active" : ""}>
     Contacts
    </button>
   </nav>
  </>
 );
};

export default Navbar;
