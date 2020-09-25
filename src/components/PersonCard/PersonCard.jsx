import React from "react";
import { MdStar } from "react-icons/md";
import ProfilePicture from "../ProfilePictures/ProfilePicture";
import Button from "../Buttons/Button";
import "../../assets/styles/components/PersonCard/PersonCard.scss";

const PersonCard = ({
 imgSource,
 title,
 subtitle,
 children,
 starsNumber,
 active = false,
}) => {
 return (
  <div className="card">
   <div className="card__profile">
    <ProfilePicture
     className="card__profile--img"
     source={imgSource}
     alt="Julio Smiling"
     active={active}
    />
    <div className="card__profile--stars">
     <MdStar />
    </div>
    <Button className="card__profile--btn" active>
     See more
    </Button>
   </div>
   <div className="card__description">
    <h1>{title}</h1>
    <p className="card__description--subtitle">{subtitle}</p>
    <p>{children}</p>
   </div>
  </div>
 );
};

export default PersonCard;
