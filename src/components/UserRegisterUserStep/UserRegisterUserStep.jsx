import React, {useState, useEffect} from "react";
import {useInputForm} from '../../hooks/useInputForm/useInputForm'
import {useInputFile} from '../../hooks/useInputFile/useInputFile'


// Styles
import "../../assets/styles/components/UserRegisterSteps/UserRegisterSteps.scss";

// Components
import InputFile from "../inputFile/InputFile";

const UserRegisterUserStep = ({setInformation}) => {

// State
const [username, setUsername] = useInputForm('')
const [profession, setProfession] = useInputForm('')
const [password, setPassword] = useInputForm('')
const [confirmPassword, setConfirmPassword] = useInputForm('')
const [description, setDescription] = useInputForm('')
const [avatar, setAvatar, avatarFile] = useInputFile('')



useEffect(() => {
  setInformation({
    username,
    profession,
    password,
    description,
    myAvatar: avatarFile
  })
}, [username, profession, password, description, avatar])

 return (
  <div className="user-register__form-step">
   <p className="user-register__form-step--paragrahp">
    Great! Now we need more information about you :D
   </p>

   <div className="user-register__form-step--row">
    <div className="user-register__form-step--inputs">
     <label htmlFor="username">Username</label>
     <input
      type="text"
      placeholder="Create a username"
      name="username"
      id="username"
      onChange={setUsername}
     />
    </div>
    <div className="user-register__form-step--inputs">
     <label htmlFor="profession">Profession</label>
     <input
      type="text"
      placeholder="Tell us your Profession"
      id="profession"
      name="profession"
      onChange={setProfession}
     />
    </div>
   </div>

   <div className="user-register__form-step--row">
    <div className="user-register__form-step--inputs">
     <label htmlFor="password">Password</label>
     <input
      type="password"
      placeholder="Write your password"
      name="password"
      id="password"
      onChange={setPassword}
     />
    </div>
    <div className="user-register__form-step--inputs">
     <label htmlFor="confirm_password">Confirm Password</label>
     <input
      type="password"
      placeholder="Confirm your password"
      name="confirm_password"
      id="confirm_password"
      onChange={setConfirmPassword}
     />
    </div>
   </div>

   <div className="user-register__form-step--inputs">
    <label htmlFor="description">Description</label>
    <textarea
     rows="2"
     name="description"
     placeholder="Write a short description about you"
     onChange={setDescription}
    />
   </div>

   <div className="user-register__form-step--inputs">
    <label htmlFor="myAvatar">Photo</label>
    <InputFile placeholder="Select an profile image" name="myAvatar" state={avatar} setState={setAvatar} />
   </div>
  </div>
 );
};

export default UserRegisterUserStep;
