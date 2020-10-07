import { useState } from "react";

export const useInputForm = (defaultValue = null) => {
 const [value, setValue] = useState(defaultValue);

 const handleInputValue = (ev) => {
  setValue(ev.currentTarget.value);
 };

 return [value, handleInputValue];
};
