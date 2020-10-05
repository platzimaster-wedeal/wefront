import React, { useState } from "react";

// Redux 
import { useDispatch } from 'react-redux'
import { INSERT_PROBLEM } from '../../redux/types/Problems/ProblemsTypes'

// Styles
import "../../assets/styles/components/CreatePostProblem/CreatePostProblem.scss";

import CreatePostProblemGeneral from "../CreatePostProblemGeneral/CreatePostProblemGeneral";
import CreatePostProblemSpecific from "../CreatePostProblemSpecific/CreatePostProblemSpecific";
import Button from "../Buttons/Button";

const CreatePostProblem = ({ onCancel, onCreate }) => {

// Handle create new problem data
const newProblemDispatch = useDispatch()
const [problemInfomartion, setProblemInformation] = useState({})
const [problemSpecificInfomartion, setProblemSpecificInformation] = useState({})

 const handleSubmitForm = (ev) => {
  ev.preventDefault();
  newProblemDispatch({type: INSERT_PROBLEM, payload: {...problemInfomartion, ...problemSpecificInfomartion}})
  onCreate()
 };

 return (
  <form onSubmit={handleSubmitForm} className="create-post-problem">
   <CreatePostProblemGeneral setInformation={setProblemInformation} />
   <CreatePostProblemSpecific setInformation={setProblemSpecificInformation} />

   <div className="create-post-problem__actions">
    <Button active type="submit">Create!</Button>
    <Button onClick={onCancel}>Cancel</Button>
   </div>
  </form>
 );
};

export default CreatePostProblem;
