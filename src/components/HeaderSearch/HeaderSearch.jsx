import React from "react";
import { NavLink } from "react-router-dom";
import { MdNotificationsNone } from "react-icons/md";

// Styles
import "../../assets/styles/components/HeaderSearch/HeaderSearch.scss";

// Images
import PhotoUser from "../../assets/static/img/users/user.jpg";

// Components
import ProfilePicture from "../ProfilePictures/ProfilePicture";
import HeaderSearchBar from "../HeaderSearchBar/HeaderSearchBar";

const HeaderSearch = () => {
 return (
  <header className="header-search">
   <span className="header-search__logo">W</span>
   <div className="header-search__search">
    <HeaderSearchBar />
   </div>
   <nav className="header-search__nav">
    <NavLink to="/draw" activeClassName="header-search__nav--active">
     Hello
    </NavLink>
    <NavLink to="/problems" activeClassName="header-search__nav--active">
     Problems
    </NavLink>
    <NavLink to="/deals" activeClassName="header-search__nav--active">
     Deals
    </NavLink>
   </nav>
   <div className="header-search__actions">
    <MdNotificationsNone />
    <ProfilePicture
     source={PhotoUser}
     active
     alt={"Name"}
     className="header-search__picture"
    />
   </div>
  </header>
 );
};

export default HeaderSearch;
