import React from "react";
// Styles
import "../../assets/styles/components/PostProblemPrevisualization/PostProblemPrevisualization.scss";

// Components
import PostProblemGraphicData from "../PostProblemGraphicData/PostProblemGraphicData";

const PostProblemPrevisualization = ({ title, idProblem, short_description, modality = 'Remote', location = 'COL' }) => {
 return (
  <div className="post-problem-previsualization">
   <div className="post-problem-previsualization__info">
    <h4>{title || "Error with my pc"}</h4>
    <strong>{idProblem || "#121515"}</strong>
   </div>
   <p className="post-problem-previsualization__description">
    {short_description || "I need some help with my problem"}
   </p>
   <PostProblemGraphicData location={location} modality={modality} />
  </div>
 );
};

export default PostProblemPrevisualization;
