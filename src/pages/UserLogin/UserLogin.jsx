import React,{useState} from "react";
import { useRequestPost } from '../../hooks/useRequestPost/useRequestPost'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// Tools
import { setCookie } from '../../utils/setCookie'

// Types
import {GET_AUTH} from '../../redux/types/Auth/AuthTypes'

// Layouts
import PresentationView from "../../layouts/PresentationView/PresentationView";

// Components
import Login from "../../components/UserLogin/UserLogin";

const UserLogin = () => {

  const url = 'https://wedeal.herokuapp.com/api/v1/auth/login'
  const [isLoading, setIsLoading] = useState(false) 

  const history = useHistory()
  const getAuthDispatch = useDispatch()

   // Handle login of the user
  const handleLogin = (data) => {    
   setIsLoading(true)
   useRequestPost(url, data).then(resp => resp.json()).then(data => {

      if(!data.error) {
         setCookie('token', data.body, 1)
         getAuthDispatch({type: GET_AUTH})
         history.push('/home')   
      }      
      setIsLoading(false)
      throw new Error(data.body, '--------Error to login------')

   }).catch(err => console.log(err))
   
  } 

 return (
  <PresentationView isRegister={false}>
   <Login onLogin={handleLogin} isLoading={isLoading} />
  </PresentationView>
 );
};

export default UserLogin;
