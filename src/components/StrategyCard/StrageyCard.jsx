import React from "react";
import ProfilePicture from "../ProfilePictures/ProfilePicture";
import ButtonAction from "../Buttons/ButtonAction";
import "../../assets/styles/components/StrategyCard/StrategyCard.scss";

const StrategyCard = ({ title, imgSource, icon, placeholder, onClick }) => {
 const handleSubmit = (ev) => ev.preventDefault();
 return (
  <form className="strategy" onSubmit={handleSubmit} onClick={onClick}>
   <div className="strategy__container container__title">
    <h2>{title}</h2>
    <ButtonAction
     className="strategy__container--btn"
     icon={icon}
     onClick={onClick}
    />
   </div>
   <div className="strategy__container">
    <ProfilePicture
     className="strategy__container--img"
     source={imgSource}
     alt={title}
     active
    />
    <input type="text" placeholder={placeholder} />
   </div>
  </form>
 );
};

export default StrategyCard;
