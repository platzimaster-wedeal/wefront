import React, { useState } from "react";
import { MdExpandMore, MdExpandLess, MdCheck } from "react-icons/md";

// Styles
import "../../assets/styles/components/FormStep/FormStep.scss";

const FormStep = ({
 title = "Step of form one",
 children,
 isComplete = false,
}) => {
 const [isOpen, setIsOpen] = useState(false);

 const handleOpenState = () => {
  setIsOpen(!isOpen);
 };

 return (
  <div className={`form-step ${isComplete && "form-step--complete"} `}>
   <div className="form-step__title" onClick={handleOpenState}>
    <h2>{title}</h2>

    {isOpen && <MdExpandLess size={30} />}
    {!isOpen && !isComplete && <MdExpandMore size={30} />}
    {!isOpen && isComplete && <MdCheck size={30} />}
   </div>
   <div
    className={`form-step__children form-step__children--${
     isOpen ? "open" : "close"
    }`}>
    {children}
   </div>
  </div>
 );
};

export default FormStep;
