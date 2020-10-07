import React, { useState, useEffect } from "react";
import { useInputForm } from "../../hooks/useInputForm/useInputForm";

// redux
import { useSelector } from "react-redux";

// Stlyes
import "../../assets/styles/components/CreatePostProblem/CreatePostProblem.scss";

// Compoents
import FormStep from "../FormStep/FormStep";
import SelectCategories from "../SelectCategories/SelectCategories";
import SelectDate from "../DatePicker/SelectDate";

const CreatePostProblemGeneral = ({ setInformation }) => {
 const { categories } = useSelector((state) => state.CategoriesReducer);

 const [title, setTitle] = useInputForm("");
 const [shortDescription, setShortDescription] = useInputForm("");
 const [modality, setModality] = useInputForm("pressencial");
 const [minPrice, setMinPrice] = useInputForm(0);
 const [maxPrice, setMaxPrice] = useInputForm(0);
 const [problemCategories, setProblemCategories] = useState([]);
 const [schedule, setSchedule] = useInputForm("");

 useEffect(() => {
  setInformation({
   title,
   short_description: shortDescription,
   modality,
   salary_range1: Number(minPrice),
   salary_range2: Number(maxPrice),
   category: problemCategories[0],
   schedule,
  });
 }, [
  title,
  shortDescription,
  modality,
  minPrice,
  maxPrice,
  problemCategories,
  schedule,
 ]);

 return (
  <FormStep title="General Information">
   <div className="create-post-problem__inputs">
    <label htmlFor="title">Title</label>
    <input
     type="text"
     placeholder="Create a title for your problem"
     onChange={setTitle}
    />
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
      <option defaultValue="pressencial">Presence</option>
      <option defaultValue="remote">Remote</option>
     </select>
    </div>
   </div>

   <div className="create-post-problem__inputs">
    <SelectCategories
     title="Categories"
     categories={categories}
     userCategories={problemCategories}
     setCategories={setProblemCategories}
    />
   </div>

   <div className="create-post-problem__inputs">
    <label>Schedule</label>
    <div className="create-post-problem__inputs--select">
     <label htmlFor="modality">Select a Date:</label>
     <input
      type="date"
      placeholder="Tell us your last name"
      id="date_of_birth"
      name="date_of_birth"
      onChange={setSchedule}
     />
    </div>
   </div>

   <div className="create-post-problem__inputs">
    <label>Approximate Price:</label>
    <label>Min:</label>
    <input type="number" placeholder="Price" onChange={setMinPrice} />
    <label>Max:</label>
    <input type="number" placeholder="Price" onChange={setMaxPrice} />
   </div>
  </FormStep>
 );
};

export default CreatePostProblemGeneral;
