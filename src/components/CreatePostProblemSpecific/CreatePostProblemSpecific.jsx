import React from "react";

// Components
import FormStep from "../FormStep/FormStep";
import InputFIle from "../inputFile/InputFile";

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
  </FormStep>
 );
};

export default CreatePostProblemSpecific;
