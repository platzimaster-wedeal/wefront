import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useInputForm } from "../../hooks/useInputForm/useInputForm";

// Styles
import "../../assets/styles/components/UserRegisterSteps/UserRegisterSteps.scss";

const UserRegisterPersonalStep = ({ setInformation }) => {
 const { countries } = useSelector((state) => state.CountriesReducer);

 const [firstName, setFirstName] = useInputForm("");
 const [lastName, setLastName] = useInputForm("");
 const [telephone, setTelephone] = useInputForm("");
 const [birth, setBirth] = useInputForm("");
 const [country, setCountry] = useInputForm("");
 const [email, setEmail] = useInputForm("");

 useEffect(() => {
  setInformation({
   first_name: firstName,
   last_name: lastName,
   telephone,
   date_of_birth: birth,
   id_city: Number(country),
   email,
  });
 }, [firstName, lastName, telephone, birth, email, country]);

 return (
  <div className="user-register__form-step">
   <p className="user-register__form-step--paragrahp">
    Welcome, we are glad to your decision of be part of this big community,
    please tell us more about you :D
   </p>

   <div className="user-register__form-step--row">
    <div className="user-register__form-step--inputs">
     <label htmlFor="first_name">First Name</label>
     <input
      type="text"
      placeholder="Tell us your first name"
      name="first_name"
      id="first_name"
      onChange={setFirstName}
      value={firstName}
     />
    </div>
    <div className="user-register__form-step--inputs">
     <label htmlFor="last_name">Last Name</label>
     <input
      type="text"
      placeholder="Tell us your last name"
      id="last_name"
      name="last_name"
      onChange={setLastName}
      value={lastName}
     />
    </div>
   </div>
   <div className="user-register__form-step--row">
    <div className="user-register__form-step--inputs">
     <label htmlFor="email">Phone</label>
     <input
      type="number"
      placeholder="Tell us your phone number"
      name="telephone"
      id="phone"
      onChange={setTelephone}
      value={telephone}
     />
    </div>
    <div className="user-register__form-step--inputs">
     <label htmlFor="date_of_birth">Birth</label>
     <input
      type="date"
      placeholder="Tell us your last name"
      id="date_of_birth"
      name="date_of_birth"
      onChange={setBirth}
      value={birth}
     />
    </div>
   </div>
   <div className="user-register__form-step--inputs">
    <label htmlFor="email">Country</label>
    <select onChange={setCountry}>
     <option>Select a country</option>
     {countries && countries.length > 0
      ? countries.map((country) => (
         <option value={country.id} key={country.id}>
          {country.name}
         </option>
        ))
      : "There is no countries available"}
    </select>
   </div>
   <div className="user-register__form-step--inputs">
    <label htmlFor="email">Email</label>
    <input
     type="email"
     placeholder="Tell us your first email"
     name="email"
     id="email"
     onChange={setEmail}
     value={email}
    />
   </div>
  </div>
 );
};

export default UserRegisterPersonalStep;
