import React from "react";

// Stlyes
import "../../assets/styles/components/AddExperience/AddExperience.scss";

// Components
import InputFile from "../inputFile/InputFile";
import Button from "../Buttons/Button";

const AddExperience = () => {
 // Handle submit of Form
 const handleSubmit = (ev) => ev.preventDefault();

 return (
  <form onSubmit={handleSubmit} className="add-experience">
   <div className="add-experience__inputs">
    <label htmlFor="title">Title</label>
    <input type="text" placeholder="What is the title of the experience" />
   </div>
   <div className="add-experience__inputs">
    <label htmlFor="shortDescription">Short Description</label>
    <textarea
     placeholder="Give us a short description of your problem"
     id="shortDescription"
     rows="6"
    />
   </div>
   <div className="add-experience__inputs">
    <label htmlFor="image">Image:</label>
    <InputFile placeholder="Add some image to validate" />
   </div>
   <Button active>Add</Button>
  </form>
 );
};

export default AddExperience;
