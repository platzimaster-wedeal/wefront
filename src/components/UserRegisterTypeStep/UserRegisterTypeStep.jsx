import React, {useEffect, useState} from "react";
import { useInputForm } from "../../hooks/useInputForm/useInputForm";

// Styles
import "../../assets/styles/components/UserRegisterSteps/UserRegisterSteps.scss";

// Components
import FormStep from "../FormStep/FormStep";
import SelectCategories from "../SelectCategories/SelectCategories";

const UserRegisterTypeStep = ({setInformation}) => {
 const [typeUser, setTypeUser] = useInputForm(1);
 const [languages, setLanguages] = useState([]);
 const [skills, setSkils] = useState([]);

 useEffect(() => {
   setInformation({
     employeer: typeUser,
     languages,
     skills,
   })
 },[typeUser, skills, languages])

 return (
  <div className="user-register__form-step">
   <p className="user-register__form-step--paragrahp">
    You are Awesome! Almost finish, tell us what you want to be in WeDeal?
   </p>

   <div className="user-register__form-step--row">
    <div className="user-register__form-step--inputs">
     <label htmlFor="employeer">Preference</label>
     <select name="employeer" id="employeeer" onChange={setTypeUser}>
      <option value="1">Employeeer</option>
      <option value="0">Employee</option>
     </select>
    </div>
   </div>

   {typeUser === "0" ? (
    <FormStep title="Person Information">
     <div className="user-register__form-step--inputs">
      <label htmlFor="employeer">Languages</label>
      <SelectCategories
       title="Select the languages that you speak"
       categories={["spanish", "english"]}
       userCategories={languages}
       setCategories={setLanguages}
      />
     </div>
    </FormStep>
   ) : (
    <FormStep title="Worker Information">
     <div className="user-register__form-step--inputs">
      <label htmlFor="employeer">Skills</label>
      <SelectCategories
       title="Select the languages that you speak"
       categories={["spanish", "english"]}
       userCategories={languages}
       setCategories={setLanguages}
      />
      <SelectCategories
       title="Select the Skills that you have"
       categories={["Art", "Engineer"]}
       userCategories={skills}
       setCategories={setSkils}
      />
     </div>
    </FormStep>
   )}
  </div>
 );
};

export default UserRegisterTypeStep;
