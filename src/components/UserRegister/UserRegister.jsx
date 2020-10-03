import React, { useState } from "react";

// Styles
import "../../assets/styles/components/UserRegister/UserRegister.scss";

// Components
import Button from "../Buttons/Button";
import UserRegisterPersonalStep from "../UserRegisterPersonalStep/UserRegisterPersonalStep";
import UserRegisterUserStep from "../UserRegisterUserStep/UserRegisterUserStep";
import UserRegisterTypeStep from "../UserRegisterTypeStep/UserRegisterTypeStep";

const UserRegister = () => {
 const [currentStep, setCurrentStep] = useState(0);
 const nextStep = () => setCurrentStep((prev) => prev + 1);
 const beforeStep = () => setCurrentStep((prev) => prev - 1);
 const RenderStep = (step) => {
  switch (step) {
   case 0:
    return <UserRegisterPersonalStep />;
    break;
   case 1:
    return <UserRegisterUserStep />;
    break;
   case 2:
    return <UserRegisterTypeStep />;
    break;

   default:
    break;
  }
 };

 const handleRegister = () => {};

 const handleOnSubmit = (ev) => ev.preventDefault();

 return (
  <form onSubmit={handleOnSubmit} className="user-register">
   <div className="user-register__title">
    <h3>register</h3>
   </div>

   <div className="user-register__step">{RenderStep(currentStep)}</div>

   <div className="user-register__actions">
    {currentStep > 0 && <Button onClick={beforeStep}>Back</Button>}
    {currentStep === 2 ? (
     <Button active onClick={handleRegister}>
      Register!
     </Button>
    ) : (
     <Button active onClick={nextStep}>
      {" "}
      Next{" "}
     </Button>
    )}
   </div>
  </form>
 );
};

export default UserRegister;
