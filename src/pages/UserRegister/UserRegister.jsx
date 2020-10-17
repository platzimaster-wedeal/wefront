import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Services
import { registerUser } from "../../services/UserService/userService";
import { getCountries } from "../../services/CountriesServices/countriesServices";
import { getCategories } from "../../services/CategoriesServices/categoriesServices";
import { getLanguages } from "../../services/LanguagesServices/languagesServices";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { GET_COUNTRIES } from "../../redux/types/Countries/CountriesTypes";
import { GET_CATEGORIES } from "../../redux/types/Categories/CategoriesTypes";
import { GET_LANGUAGES } from "../../redux/types/Languages/LanguagesTypes";

// Layouts
import PresentationView from "../../layouts/PresentationView/PresentationView";
// Components
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";
import ModalMessage from "../../components/ModalMessage/ModalMessage";
import Register from "../../components/UserRegister/UserRegister";

const UserRegister = () => {
 // ----------------- HANDLE GET GENERAL DATA -----------------

 const countries = useSelector((state) => state.CountriesReducer);
 const categories = useSelector((state) => state.CategoriesReducer);
 const languages = useSelector((state) => state.LanguagesReducer);

 const getCountriesDispatch = useDispatch();
 const getCategoriesDispatch = useDispatch();
 useEffect(() => {
  const getData = async () => {
   const data_countries = await getCountries();
   const data_categories = await getCategories();
   getCountriesDispatch({ type: GET_COUNTRIES, payload: data_countries.body });
   getCategoriesDispatch({
    type: GET_CATEGORIES,
    payload: data_categories.body,
   });
  };
  if (
   !countries.length > 0 ||
   !categories.length > 0 ||
   !languages.length > 0
  ) {
   getData();
  }
 }, []);

 const history = useHistory();

 const [isLoading, setIsLoading] = useState(false);

 // Handle error
 const [isError, setIsError] = useState(null);
 const onError = () => history.go(0);

 // Redux state
 const newUser = useSelector((state) => state.UserReducer);

 // ----------------- HANDLE REGISTER -----------------
 const [isRegistered, setIsRegistered] = useState(false);
 const onClose = () => history.push("/login");

 const onSubmit = async (data) => {
   console.log(data, 'Register')
  try {
   setIsLoading(true);
   const resp = await registerUser(data);
   setIsLoading(false);
   setIsRegistered(true);
  } catch (err) {
   setIsError(err);
   setIsLoading(false);
   console.error(err, "______ERROR REGISTER______");
  }
 };

 // ----------------- RENDER OF THE COMPONENT -----------------
 return (
  <PresentationView isRegister={true}>
   <Register onSubmit={onSubmit} isLoading={isLoading} isError={isError} />
   {isRegistered && (
    <ModalContainer>
     <Modal title="Awesome!">
      <ModalMessage
       type="great"
       message="Congratulations! Welcome to we Deal"
       onClose={onClose}
      />
     </Modal>
    </ModalContainer>
   )}
   {isError && (
    <ModalContainer>
     <Modal title="Oops!">
      <ModalMessage
       type="error"
       message="We sorry, something went wrong"
       onClose={onClose}
      />
     </Modal>
    </ModalContainer>
   )}
  </PresentationView>
 );
};

export default UserRegister;
