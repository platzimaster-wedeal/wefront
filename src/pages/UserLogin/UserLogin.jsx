import React,{useState} from "react";
import { useRequestPost } from '../../hooks/useRequestPost/useRequestPost'

// Redux 
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {GET_AUTH} from '../../redux/types/Auth/AuthTypes'
import {GET_PROFILE} from '../../redux/types/Auth/ProfileTypes'

// Services
import { getAuth } from '../../services/AuthService/authService'
import { getProfile } from '../../services/AuthService/profileService'

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

   // Handle login of the user
  const handleLogin = async (data) => {    
      setIsLoading(true)
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
