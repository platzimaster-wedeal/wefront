import React from "react";

// Styles
import "../../assets/styles/components/PostProblemDescription/PostProblemDescription.scss";

const PostProblemDescription = ({ description }) => {
 return (
  <section className="post-problem-description">
   <strong className="post-problem-description__title">Description</strong>
   <p className="post-problem-description__content">
    {description ||
     "Here must be some long description of the problem, thank you, next!"}
   </p>
  </section>
 );
};

export default PostProblemDescription;
