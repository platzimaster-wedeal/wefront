import React from "react";
import Button from "../Buttons/Button";
import "../../assets/styles/components/SelectProfileType/SelectProfileType.scss";

const SelectProfileType = () => {
 return (
  <div className="cardSelect">
   <div className="cardSelect__form--select">
    <strong>Preference:</strong>
    <select>
     <option value="worker">Worker</option>
     <option value="employee">Employee</option>
    </select>
   </div>
   <div className="cardSelect__form--buttons">
    <Button active> Save</Button>
    <Button>Cancel</Button>
   </div>
  </div>
 );
};

export default SelectProfileType;
