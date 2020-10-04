import { useState } from "react";

export const useInputFile = () => {
 const [name, setName] = useState("");
 const [file, setFile] = useState(null);

 const handleInput = (ev) => {
  setName(ev.currentTarget.files[0].name);
  setFile(ev.currentTarget.files[0])
 };

 return [name, handleInput, file];
};
