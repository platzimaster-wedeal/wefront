import React from "react";

// styles
import "../../assets/styles/components/LandingCardSmall/LandingCardSmall.scss";

const LandingCardSmall = ({ title, action = null }) => {
 return (
  <article className="landing-card-small" onClick={action}>
   <h4 className="landing-card-small__title">{title || "What"}</h4>
  </article>
 );
};

export default LandingCardSmall;
