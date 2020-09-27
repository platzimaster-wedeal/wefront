import React from "react";

// Styles
import "../../assets/styles/components/PostProblemStatus/PostProblemStatus.scss";

// Components
import ProblemStatus from "../ProblemStatus/ProblemStatus";

const PostProblemStatus = ({ status }) => {
 return (
  <article className="post-problem-status">
   <strong className="post-problem-status__title">Status:</strong>
   <ProblemStatus status={status} />
  </article>
 );
};

export default PostProblemStatus;
