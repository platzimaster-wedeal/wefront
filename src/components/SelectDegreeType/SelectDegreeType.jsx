import React, { useState } from "react";
import { MdImage, MdLink } from "react-icons/md";
import Button from "../Buttons/Button";
import InputFile from "../inputFile/InputFile";

import "../../assets/styles/components/SelectDegreeType/SelectDegreeType.scss";

const SelectDegreeType = () => {
 const [active, setActive] = useState({
  file: true,
  link: false,
 });
 const [value, setValue] = useState({
  link: "",
 });
 const enableFile = (e) => {
  return setActive({
   file: true,
   link: false,
  });
 };
 const enableLink = (e) => {
  return setActive({
   file: false,
   link: true,
  });
 };

 const handleInput = (e) => {
  setValue({
   [e.target.name]: e.target.value,
  });
 };

 return (
  <div className="selectDegree">
   <div className="selectDegree__title">
    <p>Name of Degree</p>
   </div>
   <div className="selectDegree__selector-buttons">
    <button
     className={
      active.file
       ? "selectDegree__selector-buttons-file--on"
       : "selectDegree__selector-buttons-file--off"
     }
     onClick={enableFile}>
     File{" "}
     <span>
      <MdImage />
     </span>
    </button>
    <button
     onClick={enableLink}
     className={
      active.link
       ? "selectDegree__selector-buttons-link--on"
       : "selectDegree__selector-buttons-link--off"
     }>
     Link{" "}
     <span>
      <MdLink />
     </span>
    </button>
   </div>
   <form className="selectDegree__form">
    <div className="selectDegree__form--selector">
     {active.file ? (
      <div className="selectDegree__form--select-inputs">
       <label>File:</label>
       <InputFile />
      </div>
     ) : (
      <div className="selectDegree__form--select-inputs">
       <label>Link:</label>
       <input
        onChange={handleInput}
        name="link"
        value={value.link}
        type="text"
        placeholder="Write de URL"
       />
      </div>
     )}
    </div>
    <div className="selectDegree__form--buttons">
     <Button active>Save</Button>
     <Button>Cancel</Button>
    </div>
   </form>
  </div>
 );
};

export default SelectDegreeType;
