import React from "react";

// Components
import FormStep from "../FormStep/FormStep";
import InputFIle from "../inputFile/InputFile";
import AddOptionList from "../AddOptionList/AddOptionList";

const CreatePostProblemSpecific = () => {
 return (
  <FormStep title="Specific Information (Optional)">
   <div className="create-post-problem__inputs">
    <label htmlFor="longDescription">Long Description</label>
    <textarea
     placeholder="Write a detailed description of your problem"
     rows="6"
    />

    <InputFIle placeholder="Add some image if you need" />
   </div>
   <div className="create-post-problem__inputs">
    <AddOptionList title="Add Minimun Requirements" />
   </div>
  </FormStep>
 );
};

export default CreatePostProblemSpecific;
