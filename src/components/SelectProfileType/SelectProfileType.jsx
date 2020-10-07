import React from "react";
import { useInputForm } from "../../hooks/useInputForm/useInputForm";
import Button from "../Buttons/Button";
import "../../assets/styles/components/SelectProfileType/SelectProfileType.scss";

// React Redux
import { useSelector, useDispatch } from "react-redux";
import { SET_PREFERENCE_PROFILE } from "../../redux/types/Auth/ProfileTypes";

const SelectProfileType = ({ onClose }) => {
 const { employeer } = useSelector((state) => state.ProfileReducer);
 const [preference, setPreference] = useInputForm();
 const setPreferenceDispatch = useDispatch();

 const onSave = () => {
  setPreferenceDispatch({
   type: SET_PREFERENCE_PROFILE,
   payload: Number(preference),
  });
  onClose();
 };
 return (
  <div className="cardSelect">
   <div className="cardSelect__form--select">
    <strong>Preference:</strong>
    <select onChange={setPreference}>
     <option value="1" selected={employeer ? true : false}>
      Worker
     </option>
     <option value="0" selected={employeer ? false : true}>
      Employeer
     </option>
    </select>
   </div>
   <div className="cardSelect__form--buttons">
    <Button active onClick={onSave}>
     {" "}
     Change
    </Button>
    <Button onClick={onClose}>Cancel</Button>
   </div>
  </div>
 );
};

export default SelectProfileType;
