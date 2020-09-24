import React from "react";
import ProfilePicture from "../ProfilePictures/ProfilePicture";
import ButtonAction from "../Buttons/ButtonAction";
import "../../assets/styles/components/StrategyCard/StrategyCard.scss";

const StrategyCard = ({ title, imgSource, icon, placeholder }) => {
 return (
  <form className="strategy">
   <div className="strategy__container container__title">
    <p>{title}</p>
    <ButtonAction className="strategy__container--btn" icon={icon} />
   </div>
   <div className="strategy__container">
    <ProfilePicture
     className="strategy__container--img"
     source={imgSource}
     alt="Julio smiling"
     active
    />
    <input type="text" placeholder={placeholder} />
   </div>
  </form>
 );
};

export default StrategyCard;
