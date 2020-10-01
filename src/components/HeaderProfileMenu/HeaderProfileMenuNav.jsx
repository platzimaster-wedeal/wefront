import React from "react";
import { Link } from "react-router-dom";
import { MdExitToApp } from "react-icons/md";

import "../../assets/styles/components/HeaderProfileMenu/HeaderProfileMenu.scss";

const HeaderProfileNav = ({ profileName, profileType }) => {
 return (
  <div>
   <div className="HeaderProfileMenu__name--profileImg">
    <h2 className="HeaderProfileMenu--name">
     {profileName}
     <br />
     <span>{profileType}</span>
    </h2>
   </div>
   <hr />
   <nav className="HeaderProfileMenu__nav">
    <ul className="HeaderProfileMenu__nav--ul">
     <li>
      <Link className="nav__ul--link" to="/home">
       Home
      </Link>
     </li>
     <li>
      <Link className="nav__ul--link" to="/user/deals">
       My Deals
      </Link>
     </li>
     <li>
      <Link className="nav__ul--link" to="/problems">
       Problems
      </Link>
     </li>
     <li>
      <Link className="nav__ul--link" to="/user/profile">
       Profile
      </Link>
     </li>
     <li>
      <Link className="nav__ul--link" to="/user/configuration">
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
  </div>
 );
};

export default HeaderProfileNav;
