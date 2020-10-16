import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PATCH_USER } from "../../redux/types/User/UserTypes";
import { GET_COUNTRIES } from "../../redux/types/Countries/CountriesTypes";

// Styles
import "../../assets/styles/components/UserRegister/UserRegister.scss";

// Utils
import { validateRegister } from "../../utils/validateRegister";

// Components
import Button from "../Buttons/Button";
import UserRegisterPersonalStep from "../UserRegisterPersonalStep/UserRegisterPersonalStep";
import UserRegisterUserStep from "../UserRegisterUserStep/UserRegisterUserStep";
import UserRegisterTypeStep from "../UserRegisterTypeStep/UserRegisterTypeStep";
import UserRegisterTerms from "../UserRegisterTerms/UserRegisterTerms";
import Loading from "../Loading/Loading";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";
import ModalMessage from "../../components/ModalMessage/ModalMessage";

import { getCountries } from "../../services/CountriesServices/countriesServices";

const UserRegister = ({ onSubmit, isLoading, isError }) => {
 const countries = useSelector((state) => state.CountriesReducer);
 const getCountriesDispatch = useDispatch();
 const history = useHistory();

 useEffect(() => {
  const getData = async () => {
   const data_countries = await getCountries();
   return getCountriesDispatch({
    type: GET_COUNTRIES,
    payload: [...data_countries.body],
   });
  };
  if (!countries.length > 0) {
   getData();
  }
 }, []);

 useEffect(() => {
  console.log(userInfo);
 }, [userInfo]);

 // Redux State
 const patchUser = useDispatch();
 const [currentStep, setCurrentStep] = useState(0);
 const [personalInfo, setPersonalInfo] = useState({});
 const [generalInfo, setGeneralInfo] = useState({});
 const [userInfo, setUserInfo] = useState({});
 const [dataUser, setDataUser] = useState({});
 const patch_user = useSelector((state) => state.UserReducer);

 // ----------------- VALIDATING DATA OF FORM -----------------
 const [isErrorDataForm, setIsErrorDataForm] = useState(null);
 const onErrorData = () => {
  setIsErrorDataForm(null);
  setCurrentStep(0);
 };
 const nextStep = async () => {
  switch (currentStep) {
   case 0:
    patchUser({ type: PATCH_USER, payload: personalInfo });
    setDataUser((prev) => {
     return { ...prev, ...personalInfo };
    });
    setCurrentStep((prev) => prev + 1);
    break;

   case 1:
    patchUser({ type: PATCH_USER, payload: generalInfo });
    setDataUser((prev) => {
     return { ...prev, ...generalInfo };
    });
    setCurrentStep((prev) => prev + 1);
    break;

   case 2:
    await patchUser({ type: PATCH_USER, payload: userInfo });
    setDataUser((prev) => {
     return { ...prev, ...userInfo };
    });
    setCurrentStep((prev) => prev + 1);
    break;

   case 3:
    try {
     if (validateRegister(dataUser)) onSubmit(dataUser);
    } catch (err) {
     setIsErrorDataForm(err);
    }
  }
 };

 const beforeStep = () => setCurrentStep((prev) => prev - 1);
 const RenderStep = (step) => {
  switch (step) {
   case 0:
    return (
     <UserRegisterPersonalStep
      setInformation={setPersonalInfo}
      countries={countries.length > 0 && countries}
     />
    );
   case 1:
    return <UserRegisterUserStep setInformation={setGeneralInfo} />;
   case 2:
    return <UserRegisterTypeStep setInformation={setUserInfo} />;
   case 3:
    return <UserRegisterTerms />;
  }
 };

 return (
  <form onSubmit={onSubmit} className="user-register">
   <div className="user-register__title">
    <h3>register</h3>
   </div>

   <div className="user-register__step">
    {isError ? (
     <span>Error</span>
    ) : isLoading ? (
     <div className="user-register__loading">
      <Loading />
     </div>
    ) : (
     RenderStep(currentStep)
    )}
   </div>

   <div className="user-register__actions">
    {!isLoading && !isError && currentStep > 0 && (
     <Button onClick={beforeStep}>Back</Button>
    )}
    {!isLoading && !isError && currentStep === 3 ? (
     <Button active onClick={nextStep}>
      Register!
     </Button>
    ) : (
     !isLoading && (
      <Button active onClick={nextStep}>
       {" "}
       Next{" "}
      </Button>
     )
    )}
   </div>
   {isErrorDataForm && (
    <ModalContainer>
     <Modal title="Oops!">
      <ModalMessage
       type="error"
       message={isErrorDataForm.message}
       onClose={onErrorData}
      />
     </Modal>
    </ModalContainer>
   )}
  </form>
 );
};

export default UserRegister;
