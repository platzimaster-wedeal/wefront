import React from "react";

// Styles
import "../../assets/styles/components/PostProblemDescription/PostProblemDescription.scss";

const PostProblemSchedule = ({ schedule = "02-09-2020" }) => {
 return (
  <section className="post-problem-description">
   <strong className="post-problem-description__title">Schedule</strong>
   <p className="post-problem-description__content">{schedule}</p>
  </section>
 );
};

export default PostProblemSchedule;
