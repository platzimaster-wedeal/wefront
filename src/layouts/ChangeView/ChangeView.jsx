import React, { useState } from "react";

// Styles
import "../../assets/styles/layouts/ChangeView/ChangeView.scss";

const ChangeView = ({
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
   <section className="change-view">
    <div
     className={`change-view__first ${
      isInMainView ? "change-view--current" : "change-view--hidden"
     }`}>
     {children}
    </div>

    <div
     className={`change-view__second ${
      isInMainView ? "change-view--hidden" : "change-view--current"
     }`}>
     {SecondView}
    </div>
   </section>
  </>
 );
};

export default ChangeView;
