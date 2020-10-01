import React from "react";

// Stlyes
import "../../assets/styles/components/CreatePostProblem/CreatePostProblem.scss";

// Compoents
import FormStep from "../FormStep/FormStep";
import SelectCategories from "../SelectCategories/SelectCategories";

const CreatePostProblemGeneral = () => {
 return (
  <FormStep title="General Information">
   <div className="create-post-problem__inputs">
    <label htmlFor="title">Title</label>
    <input type="text" placeholder="Create a title for your problem" />
   </div>
   <div className="create-post-problem__inputs">
    <label htmlFor="shortDescription">Short Description</label>
    <textarea
     placeholder="Give us a short description of your problem"
     id="shortDescription"
    />
   </div>

   <div className="create-post-problem__inputs">
    <label>Features Of The Problem</label>
    <div className="create-post-problem__inputs--select">
     <label htmlFor="modality">Modality:</label>
     <select id="modality">
      <option>Remote</option>
      <option>Presence</option>
     </select>
    </div>
   </div>

   <div className="create-post-problem__inputs">
    <SelectCategories />
   </div>

   <div className="create-post-problem__inputs">
    <label>Approximate Price:</label>
    <input type="number" placeholder="Price" />
   </div>
  </FormStep>
 );
};

export default CreatePostProblemGeneral;
