import React from "react";
import Button from "../Buttons/Button";
import "../../assets/styles/components/SelectProfileType/SelectProfileType.scss";

const SelectProfileType = () => {
 return (
  <div className="cardSelect">
   <div className="cardSelect__title">
    <p>Profile Preference</p>
   </div>
   <form className="cardSelect__form">
    <div className="cardSelect__form--select">
     <label>Preference:</label>
     <select>
      <option value="worker">Worker</option>
      <option value="employee">Employee</option>
     </select>
    </div>
    <div className="cardSelect__form--buttons">
     <Button active> Save</Button>
     <Button>Cancel</Button>
    </div>
   </form>
  </div>
 );
};

export default SelectProfileType;
