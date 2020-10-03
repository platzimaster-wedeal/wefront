import React from "react";

// styles
import "../../assets/styles/components/LandingParagraph/LandingParagraph.scss";

// Component
import Button from "../Buttons/Button";

const LandingParagraph = ({
 title,
 content,
 action = "Get Started",
 position = "left",
 onClick = null,
}) => {
 return (
  <div className={`landing-paragraph landing-paragraph--${position}`}>
   <h1 className="landing-paragraph__title">{title || "WeDeal"}</h1>
   <p className="landing-paragraph__content">
    {content || "Content of the paragraph"}
   </p>
   {onClick != null && (
    <Button active onClick={onClick}>
     {action}
    </Button>
   )}
  </div>
 );
};

export default LandingParagraph;
