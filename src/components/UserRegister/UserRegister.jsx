import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PATCH_USER } from '../../redux/types/User/UserTypes' 

// Styles
import "../../assets/styles/components/UserRegister/UserRegister.scss";

// Components
import Button from "../Buttons/Button";
import UserRegisterPersonalStep from "../UserRegisterPersonalStep/UserRegisterPersonalStep";
import UserRegisterUserStep from "../UserRegisterUserStep/UserRegisterUserStep";
import UserRegisterTypeStep from "../UserRegisterTypeStep/UserRegisterTypeStep";
import Loading from "../Loading/Loading";

const UserRegister = ({onSubmit, isLoading, isError}) => {

  console.log(isError, 'HEHELJELK')

  // Redux State
  const patchUser = useDispatch()

  const [currentStep, setCurrentStep] = useState(0);
  const [personalInfo, setPersonalInfo] = useState({})
  const [generalInfo, setGeneralInfo] = useState({})
  const [userInfo, setUserInfo] = useState({})

 const nextStep = () => {
   switch (currentStep) {
     case 0:
      patchUser({type:PATCH_USER, payload: personalInfo})
      setCurrentStep((prev => prev + 1))
      break;
     case 1:
      patchUser({type:PATCH_USER, payload: generalInfo})
      setCurrentStep((prev => prev + 1))
      break;
     case 2:
      patchUser({type:PATCH_USER, payload: userInfo})
      setCurrentStep((prev => prev + 1))
      onSubmit()
      break;
   }
 };

 const beforeStep = () => setCurrentStep((prev) => prev - 1);
 const RenderStep = (step) => {
  switch (step) {
   case 0:
    return <UserRegisterPersonalStep setInformation={setPersonalInfo} />;
    break;
   case 1:
    return <UserRegisterUserStep setInformation={setGeneralInfo} />;
    break;
   case 2:
    return <UserRegisterTypeStep setInformation={setUserInfo} />;
    break;

   default:
    break;
  }
 };



 return (
  <form onSubmit={onSubmit} className="user-register">
   <div className="user-register__title">
    <h3>register</h3>
   </div>

   <div className="user-register__step">
    {
      isError ? <span>Error</span> : isLoading ? <Loading /> : RenderStep(currentStep)

    }
    </div>

   <div className="user-register__actions">
    {!isLoading && !isError && currentStep > 0 && <Button onClick={beforeStep}>Back</Button>}
    {!isLoading && !isError && currentStep === 2 ? (
     <Button active onClick={nextStep}>
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
