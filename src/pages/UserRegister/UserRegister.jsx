import React, {useState} from "react";
import {useHistory} from "react-router-dom";

// Services
import { registerUser } from '../../services/UserService/userService'

// Redux
import { useSelector } from "react-redux";


// Layouts
import PresentationView from "../../layouts/PresentationView/PresentationView";
// Components
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";
import ModalMessage from "../../components/ModalMessage/ModalMessage";
import Register from "../../components/UserRegister/UserRegister";

const UserRegister = () => {

  const history = useHistory()

  const [isLoading, setIsLoading] = useState(false)

  // Handle error
  const [isError, setIsError] = useState(null)
  const onError = () => history.go(0)

  // Handle register
  const [isRegistered, setIsRegistered] = useState(false)
  const onClose = () => history.push('/login')

// Redux state
  const newUser = useSelector(state => state.UserReducer)

  const onSubmit = async () => {
    try {
      setIsLoading(true)
      const resp = await registerUser(newUser)    
      setIsLoading(false)
      
    } catch(err){
      setIsError(err)
      setIsLoading(false)
      console.error(err, '______ERROR REGISTER__________');
    }

  }

 return (
  <PresentationView isRegister={true}>
   <Register onSubmit={onSubmit} isLoading={isLoading} isError={isError} />
   {
     isRegistered && (
       <ModalContainer>
        <Modal title="Awesome!">
          <ModalMessage type="great" message="Congratulations! Welcome to we Deal" onClose={onClose} />
        </Modal>
       </ModalContainer>
     )
   }
   {
     isError && (
       <ModalContainer>
        <Modal title="Oops!">
          <ModalMessage type="error" message="We sorry, something went wrong" onClose={onClose} />
        </Modal>
       </ModalContainer>
     )
   }
  </PresentationView>
 );
};

export default UserRegister;
