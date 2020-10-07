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
    <li>
     <Requirements title={requirements} />
    </li>
   </ul>
  </section>
 );
};

export default PostProblemRequirements;
