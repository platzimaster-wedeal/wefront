import { useState } from "react";

export const useModal = (defaultValue = false) => {
 const [open, setOpen] = useState(defaultValue);

 const handleModal = () => {
  setOpen(!open);
 };

 return [open, handleModal];
};
