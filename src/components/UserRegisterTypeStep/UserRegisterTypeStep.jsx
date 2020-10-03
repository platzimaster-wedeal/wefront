import React from "react";
import { useInputForm } from "../../hooks/useInputForm/useInputForm";

// Styles
import "../../assets/styles/components/UserRegisterSteps/UserRegisterSteps.scss";

// Components
import FormStep from "../FormStep/FormStep";
import SelectCategories from "../SelectCategories/SelectCategories";

const UserRegisterTypeStep = () => {
 const [typeUser, setTypeUser] = useInputForm("true");

 return (
  <div className="user-register__form-step">
   <p className="user-register__form-step--paragrahp">
    You are Awesome! Almost finish, tell us what you want to be in WeDeal?
   </p>

   <div className="user-register__form-step--row">
    <div className="user-register__form-step--inputs">
     <label htmlFor="employeer">Preference</label>
     <select name="employeer" id="employeeer" onChange={setTypeUser}>
      <option value={true}>Employeeer</option>
      <option value={false}>Employee</option>
     </select>
    </div>
   </div>

   {typeUser === "true" ? (
    <FormStep title="Person Information">
     <div className="user-register__form-step--inputs">
      <label htmlFor="employeer">Languages</label>
      <SelectCategories
       title="Select the languages that you speak"
       categories={["spanish", "english"]}
       userCategories={[]}
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
       userCategories={[]}
      />
      <SelectCategories
       title="Select the Skills that you have"
       categories={["Art", "Engineer"]}
       userCategories={[]}
      />
     </div>
    </FormStep>
   )}
  </div>
 );
};

export default UserRegisterTypeStep;
