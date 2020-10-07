import React, {useEffect,useState} from "react";

// Redux
import { useSelector } from 'react-redux' 

// Styles
import "../../assets/styles/components/ProfileConfigure/ProfileConfigure.scss";

// Components
import FormStep from "../FormStep/FormStep";
import SelectCategories from "../SelectCategories/SelectCategories";
import ProfilePreference from "../ProfilePreference/ProfilePreference";
import AddExperienceList from "../AddExperienceList/AddExperienceList";

const ProfileConfigureWorker = ({userSkills = [], experience = [], setInformation}) => {

  const { categories } = useSelector(state => state.CategoriesReducer)

  const [experienceList, setExperienceList] = useState(experience)
  const [skills, setSkills] = useState([userSkills])

  useEffect(() => {
    setInformation({
      id_work_area: skills[0],
      experience: experienceList
    })
  }, [experienceList, skills])
  
 return (
  <FormStep title="Worker Information">
   <div className="profile-configure__inputs">
    <SelectCategories
     title="Skills"
     categories={categories}
     userCategories={skills}
     setCategories={setSkills}
    />
   </div>

   <div className="profile-configure__inputs">
    <AddExperienceList title="Experience" options={experienceList} setOptions={setExperienceList} />
   </div>

   <div className="profile-configure__inputs">
    <ProfilePreference isWorker />
   </div>
  </FormStep>
 );
};

export default ProfileConfigureWorker;
