import React from "react";
import { MdCheck } from "react-icons/md";

// Imgs
import WeStayInTouch from "../../assets/static/img/landing/WeStayInTouch.png";

// Styles
import "../../assets/styles/layouts/PresentationView/PresentationView.scss";

// Components
import LandingHeader from "../../components/LandingHeader/LandingHeader";
import GraphicData from "../../components/GraphicData/GraphicData";

const PresentationView = ({ children, isRegister = false }) => {
 return (
  <>
   <LandingHeader isRegister={isRegister} />
   <section
    className={`presentation-view ${
     isRegister && "presentation-view--register"
    }`}>
    <article className="presentation-view__application">
     <h1 className="presentation-view__application--title">WeDeal</h1>
     <small className="presentation-view__application--version">
      Version 0.0.9
     </small>

     <ul className="presentation-view__application--list">
      <li>
       {" "}
       <GraphicData value="Personalize Recommendations" active>
        {" "}
        <MdCheck size="24" />{" "}
       </GraphicData>{" "}
      </li>
      <li>
       {" "}
       <GraphicData value="The best workers in your zone" active>
        {" "}
        <MdCheck size="24" />{" "}
       </GraphicData>{" "}
      </li>
      <li>
       {" "}
       <GraphicData value="Unique community" active>
        {" "}
        <MdCheck size="24" />{" "}
       </GraphicData>{" "}
      </li>
     </ul>

     <small className="presentation-view__application--footer">
      © Copyright 2020 - WeDeal
     </small>
    </article>
    <figure className="presentation-view__image">
     <img src={WeStayInTouch} alt="We stay in touch" />
    </figure>
    <div className="presentation-view__login">{children || "hello world"}</div>
   </section>
  </>
 );
};

export default PresentationView;
