import React from "react";

// Styles
import "../../assets/styles/components/CreatePostProblem/CreatePostProblem.scss";

import CreatePostProblemGeneral from "../CreatePostProblemGeneral/CreatePostProblemGeneral";
import CreatePostProblemSpecific from "../CreatePostProblemSpecific/CreatePostProblemSpecific";
import Button from "../Buttons/Button";

const CreatePostProblem = ({ onCancel }) => {
 const handleSubmitForm = (ev) => {
  ev.preventDefault();
 };

 return (
  <form onSubmit={handleSubmitForm} className="create-post-problem">
   <CreatePostProblemGeneral />
   <CreatePostProblemSpecific />

   <div className="create-post-problem__actions">
    <Button active>Create!</Button>
    <Button onClick={onCancel}>Cancel</Button>
   </div>
  </form>
 );
};

export default CreatePostProblem;
