import React, { useEffect } from "react";

import { useSelector } from 'react-redux'

import { useInputForm } from '../../hooks/useInputForm/useInputForm'

// Styles
import "../../assets/styles/components/ProfileConfigure/ProfileConfigure.scss";

// Components
import FormStep from "../FormStep/FormStep";
import SelectCategories from "../SelectCategories/SelectCategories";

const ProfileConfigurePersonal = ({profileName, profileLastName, profileEmail, profilePhone, profileCountry, setInformation}) => {

  const { countries } = useSelector(state => state.CountriesReducer)

 
  const [first_name, setFirstName] = useInputForm(profileName)
  const [last_name, setLastName] = useInputForm(profileLastName)
  const [email, setUserEmail] = useInputForm(profileEmail)
  const [phone, setUserPhone] = useInputForm(profilePhone)
  const [country, setUserCountry] = useInputForm(profileCountry)
  const [birth, setBirth] = useInputForm(profileCountry)

  useEffect(() => {
    setInformation({
      first_name,
      last_name,
      email,
      telephone: phone,
      id_city: Number(country),
      date_of_birth: birth
    })
  }, [first_name, last_name, email, phone, country])

 return (
  <FormStep title="Personal Information">
   <div className="profile-configure__inputs">
    <label htmlFor="first_name">First Name:</label>
    <input type="text" placeholder="Tell us your name" id="first_name" value={first_name} onChange={setFirstName} />
   </div>
   <div className="profile-configure__inputs">
    <label htmlFor="last_name">Last Name:</label>
    <input type="text" placeholder="Tell us last name" id="last_name" value={last_name} onChange={setLastName} />
   </div>
   <div className="profile-configure__inputs">
    <label htmlFor="email">Email:</label>
    <input type="text" placeholder="Tell us your new email" id="email" value={email} onChange={setUserEmail} />
   </div>
   <div className="profile-configure__inputs">
    <label htmlFor="phone">Phone:</label>
    <input type="text" placeholder="Tell us your new phone" id="phone" value={phone} onChange={setUserPhone} />
   </div>

   <div className="profile-configure__inputs">
     <label htmlFor="date_of_birth">Birth</label>
     <input
      type="date"
      placeholder="Tell us your last name"
      id="date_of_birth"
      name="date_of_birth"
      onChange={setBirth}
     />
   </div>

   <div className="profile-configure__inputs">
    <label>Location:</label>

    <div className="profile-configure__inputs--row">
     <div className="profile-configure__inputs--select">
     </div>
     <div className="profile-configure__inputs--select">
      <label htmlFor="nationality">Location:</label>
      <select id="location" onChange={setUserCountry}>
        {
          countries && countries.length > 0 && countries.map(country => (
            <option key={country.id} value={country.id}>{country.name}</option>
          ))
        }
      </select>
     </div>
    </div>
   </div>
  </FormStep>
 );
};

export default ProfileConfigurePersonal;
