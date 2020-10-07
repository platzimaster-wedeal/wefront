import React, {useEffect,useState} from "react";
import { useInputForm } from '../../hooks/useInputForm/useInputForm'

// Hooks
import { useInputFile } from '../../hooks/useInputFile/useInputFile'

// Components
import FormStep from "../FormStep/FormStep";
import InputFIle from "../inputFile/InputFile";
import AddOptionList from "../AddOptionList/AddOptionList";

const CreatePostProblemSpecific = ({setInformation}) => {

 const [longDescription, setLongDescription] = useInputForm('') 
 const [fileName, setFileName, file] = useInputFile();
 const [requirements, setRequirements] = useState([]) 

 useEffect(() => {
   setInformation({
     long_description: longDescription,
     myFile: file,
     requirements: requirements[0]
   })
 }, [longDescription, file, requirements])

 return (
  <FormStep title="Specific Information (Optional)">
   <div className="create-post-problem__inputs">
    <label htmlFor="longDescription">Long Description</label>
    <textarea
     placeholder="Write a detailed description of your problem"
     rows="6"
     onChange={setLongDescription}
    />

    <InputFIle placeholder="Add some image if you need" state={fileName} setState={setFileName} />
   </div>
   <div className="create-post-problem__inputs">
    <AddOptionList title="Add Minimun Requirements" setState={setRequirements}/>
   </div>
  </FormStep>
 );
};

export default CreatePostProblemSpecific;
