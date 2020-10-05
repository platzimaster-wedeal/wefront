import React, {useState, useEffect} from "react";
import { useInputForm } from '../../hooks/useInputForm/useInputForm'

// Stlyes
import "../../assets/styles/components/CreatePostProblem/CreatePostProblem.scss";

// Compoents
import FormStep from "../FormStep/FormStep";
import SelectCategories from "../SelectCategories/SelectCategories";
import SelectDate from "../DatePicker/SelectDate";

const CreatePostProblemGeneral = ({setInformation}) => {

  const [title, setTitle] = useInputForm('')
  const [shortDescription, setShortDescription] = useInputForm('')
  const [modality, setModality] = useInputForm('')
  const [price, setPrice] = useInputForm('')
  const [categories, setCategories] = useState([])
  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    setInformation({
      title,
      short_description: shortDescription,
      modality,
      price,
      categories,
      schedule
    })
  }, [title, shortDescription, modality, price, categories, schedule]) 

 return (
  <FormStep title="General Information">
   <div className="create-post-problem__inputs">
    <label htmlFor="title">Title</label>
    <input type="text" placeholder="Create a title for your problem" onChange={setTitle} />
   </div>
   <div className="create-post-problem__inputs">
    <label htmlFor="shortDescription">Short Description</label>
    <textarea
     placeholder="Give us a short description of your problem"
     id="shortDescription"
     onChange={setShortDescription}
    />
   </div>

   <div className="create-post-problem__inputs">
    <label>Features Of The Problem</label>
    <div className="create-post-problem__inputs--select">
     <label htmlFor="modality">Modality:</label>
     <select id="modality" onChange={setModality}>
      <option value="remote">Remote</option>
      <option value="presence">Presence</option>
     </select>
    </div>
   </div>

   <div className="create-post-problem__inputs">
    <SelectCategories setCategories={setCategories} />
   </div>

   <div className="create-post-problem__inputs">
    <label>Schedule</label>
    <div className="create-post-problem__inputs--select">
     <label htmlFor="modality">Select a Date:</label>
     <SelectDate setState={setSchedule} />
    </div>
   </div>

   <div className="create-post-problem__inputs">
    <label>Approximate Price:</label>
    <input type="number" placeholder="Price" onChage={setPrice}/>
   </div>
  </FormStep>
 );
};

export default CreatePostProblemGeneral;
