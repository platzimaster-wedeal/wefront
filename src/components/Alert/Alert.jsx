import React from "react";
import { MdCheckCircle } from "react-icons/md";
import Button from "../Buttons/Button";
import "../../assets/styles/components/Alert/Alert.scss";

const Alert = ({ user = "julio" }) => {
 return (
  <div className="Alert">
   <div className="Alert__title">
    <p>Great!</p>
   </div>
   <form className="Alert__form">
    <div className="Alert__form--text">
     <span>
      <MdCheckCircle />
     </span>
     <p>You apply was correct sent to @{user}! wait por the response </p>
    </div>
    <div className="Alert__form--buttons">
     <Button active> Go Home</Button>
     <Button>Close</Button>
    </div>
   </form>
  </div>
 );
};

export default Alert;
