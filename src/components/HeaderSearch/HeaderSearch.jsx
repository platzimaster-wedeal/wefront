import React from "react";
import { NavLink, Link } from "react-router-dom";
import { MdNotificationsNone } from "react-icons/md";

// Styles
import "../../assets/styles/components/HeaderSearch/HeaderSearch.scss";

// Images
import PhotoUser from "../../assets/static/img/users/user.jpg";

// Components
import ProfilePicture from "../ProfilePictures/ProfilePicture";
import HeaderSearchBar from "../HeaderSearchBar/HeaderSearchBar";
import HeaderProfileMenu from "../HeaderProfileMenu/HeaderProfileMenu";

const HeaderSearch = ({user = {}}) => {
 return (
  <header className="header-search">
   <Link to="/home" className="header-search__logo">
    W
   </Link>
   <div className="header-search__search">
    <HeaderSearchBar />
   </div>
   <nav className="header-search__nav">
    <NavLink to="/home" activeClassName="header-search__nav--active">
     Home
    </NavLink>
    <NavLink to="/problems" activeClassName="header-search__nav--active">
      Problems
    </NavLink>
    
    <NavLink to="/user/deals" activeClassName="header-search__nav--active">
     Deals
    </NavLink>
   </nav>
   <div className="header-search__actions">
    <HeaderProfileMenu
     profileImg={user.avatar || PhotoUser}
     profileName={user.first_name || "No Name"}
     profileType={user.employeer ? "worker" : "Person"}
    />
   </div>
  </header>
 );
};

export default HeaderSearch;
