import React from "react";

// Styles
import "../../assets/styles/components/PostProblemRequirements/PostProblemRequirements.scss";
// Components
import Requirements from "../Requirements/Requirements";

const PostProblemRequirements = ({ requirements }) => {
 return (
  <section className="post-problem-requirements">
   <strong className="post-problem-requirements__title">
    Minimun Requirements
   </strong>
   <ul className="post-problem-requirements__list">
    {requirements ? (
     requirements.map((req) => (
      <li key={req}>
       <Requirements title={req} />
      </li>
     ))
    ) : (
     <>
      <li>
       <Requirements title="Knowledge about PCs" />
      </li>
      <li>
       <Requirements title="Knowledge about PCs" />
      </li>
     </>
    )}
   </ul>
  </section>
 );
};

export default PostProblemRequirements;
