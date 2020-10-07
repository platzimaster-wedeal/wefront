import React, { useEffect } from "react";
import { useInputForm } from '../../hooks/useInputForm/useInputForm'
import { useInputFile } from '../../hooks/useInputFile/useInputFile'

// Stlyes
import "../../assets/styles/components/AddExperience/AddExperience.scss";

// Components
import InputFile from "../inputFile/InputFile";
import Button from "../Buttons/Button";

const AddExperience = ({onAdd, setOption}) => {
  const [title, setTitle] = useInputForm('')
  const [description, setDescription] = useInputForm('')
  const [nameFile, setNameFile, file] = useInputFile()

  useEffect(() => {
    setOption({
      title,
      description,
      myFile: file
    })
  }, [title, description, nameFile])
 return (
  <div className="add-experience">
   <div className="add-experience__inputs">
    <label htmlFor="title">Title</label>
    <input type="text" placeholder="What is the title of the experience" onChange={setTitle}/>
   </div>
   <div className="add-experience__inputs">
    <label htmlFor="shortDescription">Short Description</label>
    <textarea
     placeholder="Give us a short description of your problem"
     id="shortDescription"
     rows="6"
     onChange={setDescription}
    />
   </div>
   <div className="add-experience__inputs">
    <label htmlFor="image">Image:</label>
    <InputFile placeholder="Add some image to validate" state={nameFile} setState={setNameFile} />
   </div>
   <Button active onClick={onAdd}>Add</Button>
  </div>
 );
};

export default AddExperience;
