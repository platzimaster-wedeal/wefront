import React from "react";
import { MdErrorOutline } from "react-icons/md";
import "../../assets/styles/components/AlertProfileConf/AlertProfileConf.scss";
import Button from "../Buttons/Button";

const AlertProfileConf = () => {
 return (
  <div className="cardAlert">
   <div className="cardAlert__title">
    <p>Are you sure?</p>
   </div>
   <form className="cardAlert__form">
    <div className="cardAlert__form--text">
     <span>
      <MdErrorOutline />
     </span>
     <p>Are you sure you want to change these information?</p>
    </div>
    <div className="cardAlert__form--buttons">
     <Button active> Save</Button>
     <Button>Cancel</Button>
    </div>
   </form>
  </div>
 );
};

export default AlertProfileConf;
