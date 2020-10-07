import React, { useState } from "react";

// Styles
import "../../assets/styles/layouts/ChangeViewProfile/ChangeViewProfile.scss";

// Components
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";

const ChangeViewProfile = ({
 children,
 firstViewTitle,
 SecondView,
 secondViewTitle,
}) => {
 const [isInMainView, setIsInMainView] = useState(true);

 const handleChangeMainView = () => {
  setIsInMainView(true);
 };

 const handleChangeSecondView = () => {
  setIsInMainView(false);
 };

 return (
  <>
   <div className="change-view-header">
    <nav className="change-view-header__nav">
     <a
      href="#"
      className={`${isInMainView && "change-view-header__nav--selected"}`}
      onClick={handleChangeMainView}>
      {firstViewTitle || "Home"}
     </a>
     <a
      href="#"
      className={`${!isInMainView && "change-view-header__nav--selected"}`}
      onClick={handleChangeSecondView}>
      {secondViewTitle || "Connections"}
     </a>
    </nav>
   </div>

   <section className="change-view-profile">
    <div
     className={`change-view-profile__first ${
      isInMainView
       ? "change-view-profile--current"
       : "change-view-profile--hidden"
     }`}>
     {children}
    </div>

    <div
     className={`change-view-profile__second ${
      isInMainView
       ? "change-view-profile--hidden"
       : "change-view-profile--current"
     }`}>
     {SecondView}
    </div>
   </section>
  </>
 );
};

export default ChangeViewProfile;
