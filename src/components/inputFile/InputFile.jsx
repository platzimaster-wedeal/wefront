import React from "react";
import { MdImage } from "react-icons/md";

import { useInputFile } from "../../hooks/useInputFile/useInputFile";

const InputFile = ({
 widt,
 height,
 placeholder = "Add something",
 name,
 onChange = (ev) => {
  console.log(ev.currentTarget.files[0].name);
 },
}) => {
 const [nameFile, handleInputFile] = useInputFile();

 return (
  <div className="input-file__view">
   <input type="file" onChange={handleInputFile} id={name} name={name} />
   <p>{nameFile.length > 0 ? nameFile : placeholder}</p>
   <MdImage size="24" />
  </div>
 );
};

export default InputFile;
