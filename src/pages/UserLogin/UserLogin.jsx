import React, { useState, useEffect } from "react";

// Redux
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GET_AUTH } from "../../redux/types/Auth/AuthTypes";
import { GET_PROFILE } from "../../redux/types/Auth/ProfileTypes";
import { GET_CATEGORIES } from "../../redux/types/Categories/CategoriesTypes";
import { GET_LANGUAGES } from "../../redux/types/Languages/LanguagesTypes";
import { GET_COUNTRIES } from "../../redux/types/Countries/CountriesTypes";
import { GET_USER_PREDICT } from "../../redux/types/Results/ResultsTypes";

// Services
import { getAuth } from "../../services/AuthService/authService";
import { getProfile } from "../../services/AuthService/profileService";
import { getUserFollowers } from "../../services/UserService/userService";
import { getCategories } from "../../services/CategoriesServices/categoriesServices";
import { getLanguages } from "../../services/LanguagesServices/languagesServices";
import { getCountries } from "../../services/CountriesServices/countriesServices";
import { getPredictUser, registerUser } from "../../services/ResultsServices/resultsServices";

// Tools
import { setCookie } from "../../utils/setCookie";

// Layouts
import PresentationView from "../../layouts/PresentationView/PresentationView";
// Components
import Login from "../../components/UserLogin/UserLogin";

const UserLogin = () => {
 const [isLoading, setIsLoading] = useState(false);
 const [isError, setIsError] = useState(null);

 const history = useHistory();
 const getAuthDispatch = useDispatch();
 const getProfileDispatch = useDispatch();

 // ----------------- HANDLE GET GENERAL DATA -----------------
 const getLanguagesDispatch = useDispatch();
 const getCategoriesDispatch = useDispatch();
 const getCountriesDispatch = useDispatch();

 useEffect(() => {
  const getGeneralData = async () => {
   try {
    const data_categories = await getCategories();
    getCategoriesDispatch({
     type: GET_CATEGORIES,
     payload: [...data_categories.body],
    });

    const data_countries = await getCountries();
    getCountriesDispatch({
     type: GET_COUNTRIES,
     payload: [...data_countries.body],
    });
   } catch (err) {
    console.error(err, "______ERROR COUNTRIES______");
   }
  };
  getGeneralData();
 }, []);

 // ----------------- HANDLE LOGIN PROFILE -----------------
 const handleLogin = async (data) => {
  try {
   setIsLoading(true);
   const { body } = await getAuth(data);
   setCookie("token", body.token_user, 1);
   getAuthDispatch({ type: GET_AUTH, payload: body.id_user });
   console.log(body.id_user)
   window.localStorage.setItem("token", body.token_user);
   window.localStorage.setItem("id", body.id_user);

  //  const respRegisterUser = await registerUser(body.id_user)
  //  const respPredictUser = await getPredictUser(body.id_user)

   const respProfile = await getProfile(body.id_user);
   const respFollowers = await getUserFollowers(body.id_user);
   const profileData = {
    ...respProfile.body,
    followers: respFollowers.body[0].total_followers,
   };
   getProfileDispatch({ type: GET_PROFILE, payload: { ...profileData } });
   return history.push("/home");
  } catch (err) {
   setIsError(err.message);
   setIsLoading(false);
   console.error(err);
  }
 };

 // ----------------- RENDER OF THE COMPONENT -----------------
 return (
  <PresentationView isRegister={false}>
   <Login onLogin={handleLogin} isLoading={isLoading} isError={isError} />
  </PresentationView>
 );
};

export default UserLogin;
