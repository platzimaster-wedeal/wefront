import React, { useState } from "react";
import { useSelector } from 'react-redux'

import { useInputForm } from '../../hooks/useInputForm/useInputForm'

// Styles
import "../../assets/styles/components/ProfileConfigure/ProfileConfigure.scss";

// Components
import FormStep from "../FormStep/FormStep";
import SelectCategories from "../SelectCategories/SelectCategories";

const ProfileConfigureGeneral = ({profileUsername, profileProfession, profileDescription, profileLanguages}) => {

  const { languages } = useSelector(state => state.LanguagesReducer)

  const [username, setUsername] = useInputForm(profileUsername)
  const [profession, setProfession] = useInputForm(profileProfession)
  const [description, setDescription] = useInputForm(profileDescription)
  const [userLanguages, setUserLanguages] = useInputForm(profileLanguages)


 return (
  <FormStep title="General Information">
   <div className="profile-configure__inputs">
    <label htmlFor="username">Nickname:</label>
    <input type="text" placeholder="Tell us your new nickname" id="username" value={username} onChange={setUsername} />
   </div>
   <div className="profile-configure__inputs">
    <label htmlFor="profession">Profession:</label>
    <input type="text" placeholder="Tell us your Profession" id="profession" value={profession} onChange={setProfession} />
   </div>
   <div className="profile-configure__inputs">
    <label htmlFor="description">Short Description:</label>
    <input
     type="text"
     placeholder="Give us a short description"
     id="description"
     value={description}
     onChange={setDescription}
    />
   </div>

   <div className="profile-configure__inputs">
    <SelectCategories
     title="Languages"
     categories={languages}
     userCategories={userLanguages}
     setState={setUserLanguages}
    />
   </div>
  </FormStep>
 );
};

export default ProfileConfigureGeneral;
