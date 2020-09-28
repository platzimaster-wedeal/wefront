import React from "react";

// Styles
import "../../assets/styles/components/CreatePostProblem/CreatePostProblem.scss";

import CreatePostProblemGeneral from "../CreatePostProblemGeneral/CreatePostProblemGeneral";
import CreatePostProblemSpecific from "../CreatePostProblemSpecific/CreatePostProblemSpecific";
import Button from "../Buttons/Button";

const CreatePostProblem = () => {
 const handleSubmitForm = (ev) => {
  ev.preventDefault();
 };

 return (
  <form onSubmit={handleSubmitForm} className="create-post-problem">
   <h3>Create Your Problem!</h3>
   <CreatePostProblemGeneral />
   <CreatePostProblemSpecific />

   <div className="create-post-problem__actions">
    <Button active>Create!</Button>
    <Button>Cancel</Button>
   </div>
  </form>
 );
};

export default CreatePostProblem;
