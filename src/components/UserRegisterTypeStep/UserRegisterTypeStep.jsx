import React, {useEffect, useState} from "react";
import { useInputForm } from "../../hooks/useInputForm/useInputForm";

// redux
import { useSelector } from 'react-redux'

// Styles
import "../../assets/styles/components/UserRegisterSteps/UserRegisterSteps.scss";

// Components
import FormStep from "../FormStep/FormStep";
import SelectCategories from "../SelectCategories/SelectCategories";

const UserRegisterTypeStep = ({setInformation}) => {

  // Redux state
  const { categories } = useSelector(state => state.CategoriesReducer)

 const [typeUser, setTypeUser] = useInputForm(1);
 const [languages, setLanguages] = useState([]);
 const [skills, setSkils] = useState([]);

 useEffect(() => {
   setInformation({
     employeer: typeUser,
     id_language: languages[0],
     id_work_area: skills[0],
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
      <option defaultValue="1">Employeeer</option>
      <option value="0">Employee</option>
     </select>
    </div>
   </div>

   {typeUser !== "0" ? (
    <FormStep title="Person Information">
     <div className="user-register__form-step--inputs">
      <label htmlFor="employeer">Languages</label>
      <SelectCategories
       title="Select the languages that you speak"
       categories={[{title: 'Spanish', id: 49}, {title: 'English', id: 37}]}
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
       categories={[{title: 'Spanish', id: 49}, {title: 'English', id: 37}]}
       userCategories={languages}
       setCategories={setLanguages}
      />
      <SelectCategories
       title="Select the Skills that you have"
       categories={categories}
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
