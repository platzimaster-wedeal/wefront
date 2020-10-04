import React, {useState} from "react";

// Services
import { registerUser } from '../../services/UserService/userService'

// Redux
import { useSelector } from "react-redux";


// Layouts
import PresentationView from "../../layouts/PresentationView/PresentationView";
// Components
import Register from "../../components/UserRegister/UserRegister";

const UserRegister = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(null)

  const newUser = useSelector(state => state.UserReducer)

  const onSubmit = async () => {
    try {
      setIsLoading(true)
      const resp = await registerUser(newUser)      
      setIsLoading(false)
      
    } catch(err){
      setIsError(err)
      setIsLoading(false)
      console.error(err);
    }

  }

 return (
  <PresentationView isRegister={true}>
   <Register onSubmit={onSubmit} isLoading={isLoading} isError={isError} />
  </PresentationView>
 );
};

export default UserRegister;
