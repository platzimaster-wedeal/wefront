import React from "react";
// Styles
import "../../assets/styles/components/PostProblemPrevisualization/PostProblemPrevisualization.scss";

// Components
import PostProblemGraphicData from "../PostProblemGraphicData/PostProblemGraphicData";

const PostProblemPrevisualization = ({ title, idProblem, description }) => {
 return (
  <div className="post-problem-previsualization">
   <div className="post-problem-previsualization__info">
    <h4>{title || "Error with my pc"}</h4>
    <strong>{idProblem || "#121515"}</strong>
   </div>
   <p className="post-problem-previsualization__description">
    {description || "I need some help with my problem"}
   </p>
   <PostProblemGraphicData location="COL" />
  </div>
 );
};

export default PostProblemPrevisualization;
