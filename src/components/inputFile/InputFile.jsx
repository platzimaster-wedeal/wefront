import React from "react";
import { MdImage } from "react-icons/md";

import { useInputFile } from "../../hooks/useInputFile/useInputFile";

const InputFile = ({
 widt,
 height,
 placeholder = "Add something",
 name,
 setState,
 state,
}) => {
 return (
  <div className="input-file__view">
   <input type="file" onChange={setState} id={name} name={name} />
   <p>{state.length > 0 ? state : placeholder}</p>
   <MdImage size="24" />
  </div>
 );
};

export default InputFile;
