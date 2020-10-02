import React from "react";

// styles
import "../../assets/styles/components/LandingCard/LandingCard.scss";

const LandingCard = ({ title, image }) => {
 return (
  <article className="landing-card">
   <h3 className="landing-card__title">{title || "What you need"}</h3>
   <figure className="landing-card__figure">
    <img src={image} alt={title} />
   </figure>
  </article>
 );
};

export default LandingCard;
