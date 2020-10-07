import React, { useState, useEffect } from "react";

import { useInputForm } from '../../hooks/useInputForm/useInputForm'

// Styles
import "../../assets/styles/components/ProfileConfigure/ProfileConfigure.scss";

// Components
import FormStep from "../FormStep/FormStep";
import SelectCategories from "../SelectCategories/SelectCategories";

const ProfileConfigureGeneral = ({profileUsername, profileDescription, profileLanguages, setInformation}) => {


  const [username, setUsername] = useInputForm(profileUsername)
  const [description, setDescription] = useInputForm(profileDescription)
  const [userLanguages, setUserLanguages] = useState(profileLanguages)

  useEffect(() => {
    setInformation({
      username,
      description,
      id_language: userLanguages[0]
    })
  }, [username, description, userLanguages])


 return (
  <FormStep title="General Information">
   <div className="profile-configure__inputs">
    <label htmlFor="username">Nickname:</label>
    <input type="text" placeholder="Tell us your new nickname" id="username" value={username} onChange={setUsername} />
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
     categories={[{title: 'Spanish', id: 49}, {title: 'English', id: 37}]}
     userCategories={userLanguages}
     setCategories={setUserLanguages}
    />
   </div>
  </FormStep>
 );
};

export default ProfileConfigureGeneral;
