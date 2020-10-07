import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PATCH_USER } from '../../redux/types/User/UserTypes' 
import {GET_COUNTRIES} from '../../redux/types/Countries/CountriesTypes'


// Styles
import "../../assets/styles/components/UserRegister/UserRegister.scss";

// Components
import Button from "../Buttons/Button";
import UserRegisterPersonalStep from "../UserRegisterPersonalStep/UserRegisterPersonalStep";
import UserRegisterUserStep from "../UserRegisterUserStep/UserRegisterUserStep";
import UserRegisterTypeStep from "../UserRegisterTypeStep/UserRegisterTypeStep";
import Loading from "../Loading/Loading";

import { getCountries } from '../../services/CountriesServices/countriesServices'


const UserRegister = ({onSubmit, isLoading, isError}) => {

  const countries = useSelector(state => state.CountriesReducer)
  const getCountriesDispatch = useDispatch()


  useEffect(() => {
    const getData = async () => {
        const data_countries = await getCountries()
        return getCountriesDispatch({type: GET_COUNTRIES, payload: [...data_countries.body]})
    }
    if(!countries.length > 0) {
      getData()
    }
  },[])


  // Redux State
  const patchUser = useDispatch()

  const [currentStep, setCurrentStep] = useState(0);
  const [personalInfo, setPersonalInfo] = useState({})
  const [generalInfo, setGeneralInfo] = useState({})
  const [userInfo, setUserInfo] = useState({})

  const patch_user = useSelector(state => state.UserReducer)

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
    return <UserRegisterPersonalStep setInformation={setPersonalInfo} countries={countries.length > 0 && countries} />;
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
