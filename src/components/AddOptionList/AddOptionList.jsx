import React, { useState } from "react";
import { useInputForm } from "../../hooks/useInputForm/useInputForm";
import { MdAdd } from "react-icons/md";

// Styles
import "../../assets/styles/components/AddOptionList/AddOptionList.scss";

// Components
import SmallButtonSA from "../Buttons/SmallButtonSA";
import Requirements from "../Requirements/Requirements";

const AddOptionList = ({ title = "Add your option", options = [] }) => {
 const [currentOptions, setCurrentOptions] = useState(options);
 const [option, setOption] = useState("");

 const handleAddOption = (ev) => {
  ev.preventDefault();
  setCurrentOptions((prev) => [...prev, option]);
  setOption("");
 };

 const handleOption = (ev) => {
  ev.preventDefault();
  setOption(ev.currentTarget.value);
 };

 return (
  <form onSubmit={handleOption} className="add-option-list">
   <label htmlFor={title}> {title} </label>
   <ul>
    {currentOptions.length > 0 ? (
     currentOptions.map((currOpt) => (
      <li key={currOpt}>
       <Requirements active title={currOpt} />
      </li>
     ))
    ) : (
     <small> Add something to your list. </small>
    )}
   </ul>
   <div className="add-option-list__input">
    <input
     type="text"
     id={title}
     placeholder="Write your option"
     onChange={handleOption}
     value={option}
    />
    <SmallButtonSA icon={MdAdd} onClick={handleAddOption} />
   </div>
  </form>
 );
};

export default AddOptionList;
