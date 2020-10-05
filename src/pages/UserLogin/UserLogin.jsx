import React,{useState, useEffect} from "react";

// Redux 
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {GET_AUTH} from '../../redux/types/Auth/AuthTypes'
import {GET_PROFILE} from '../../redux/types/Auth/ProfileTypes'
import {GET_CATEGORIES} from '../../redux/types/Categories/CategoriesTypes'
import {GET_LANGUAGES} from '../../redux/types/Languages/LanguagesTypes'

// Services
import { getAuth } from '../../services/AuthService/authService'
import { getProfile } from '../../services/AuthService/profileService'
import { getCategories } from '../../services/CategoriesServices/categoriesServices'
import { getLanguages } from '../../services/LanguagesServices/languagesServices'

// Tools
import { setCookie } from '../../utils/setCookie'


// Layouts
import PresentationView from "../../layouts/PresentationView/PresentationView";
// Components
import Login from "../../components/UserLogin/UserLogin";

const UserLogin = () => {
  const [isLoading, setIsLoading] = useState(false) 
  const [isError, setIsError] = useState(null) 

  const history = useHistory()
  const getAuthDispatch = useDispatch()
  const getProfileDispatch = useDispatch()

   // Handle Get general data
  const getLanguagesDispatch = useDispatch()
  const getCategoriesDispatch = useDispatch()

  useEffect(() => {
     const getGeneralData = async () => {
        const data_languages = await getLanguages()
        getLanguagesDispatch({type: GET_LANGUAGES, payload: [...data_languages]})

        const data_categories = await getCategories()
        getCategoriesDispatch({type: GET_CATEGORIES, payload: [...data_categories]})
     }
     getGeneralData()
     
  }, [])

   // Handle login of the user
  const handleLogin = async (data) => {    
      try {
         setIsLoading(true)
         const { body } = await getAuth(data)
         setCookie('token', body.token_user, 1)
         getAuthDispatch({type: GET_AUTH, payload: body.id_user})
         
         const respProfile = await getProfile(body.id_user)
         getProfileDispatch({type: GET_PROFILE, payload: {...respProfile.body}})
         return history.push('/home')

      } catch(err) {
         setIsError(err.message)
         setIsLoading(false)
      }
  } 

 return (
  <PresentationView isRegister={false}>
   <Login onLogin={handleLogin} isLoading={isLoading} isError={isError} />
  </PresentationView>
 );
};

export default UserLogin;
