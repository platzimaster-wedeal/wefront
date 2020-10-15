import React, { useState } from "react";
import { useSelector } from "react-redux";

// Styles
import "../../assets/styles/components/CreatePostProblem/CreatePostProblem.scss";

import CreatePostProblemGeneral from "../CreatePostProblemGeneral/CreatePostProblemGeneral";
import CreatePostProblemSpecific from "../CreatePostProblemSpecific/CreatePostProblemSpecific";
import Button from "../Buttons/Button";

const CreatePostProblem = ({ onCancel, onCreate, setProblemData }) => {
 const { id } = useSelector((state) => state.AuthReducer);
 const { first_name, id_employer } = useSelector(
  (state) => state.ProfileReducer
 );

 // Handle create new problem data
 const [problemInfomartion, setProblemInformation] = useState({});
 const [problemSpecificInfomartion, setProblemSpecificInformation] = useState(
  {}
 );

 const handleSubmitForm = async () => {
  const data = {
   id_employer: Number(id_employer),
   employer_name: first_name,
   ...problemInfomartion,
   ...problemSpecificInfomartion,
  };
  await onCreate(data);
 };

 return (
  <div className="create-post-problem">
   <CreatePostProblemGeneral setInformation={setProblemInformation} />
   <CreatePostProblemSpecific setInformation={setProblemSpecificInformation} />

   <div className="create-post-problem__actions">
    <Button active onClick={handleSubmitForm}>
     Create!
    </Button>
    <Button onClick={onCancel}>Cancel</Button>
   </div>
  </div>
 );
};

export default CreatePostProblem;
