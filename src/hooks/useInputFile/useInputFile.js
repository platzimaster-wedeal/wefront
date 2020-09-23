import { useState } from "react";

export const useInputFile = () => {
 const [name, setName] = useState("");

 const handleInput = (ev) => {
  setName(ev.currentTarget.files[0].name);
 };

 return [name, handleInput];
};
