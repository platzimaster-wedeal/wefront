import React from "react";

// Styles
import "../../assets/styles/components/PostProblem/PostProblem.scss";

// Components
import PostHeader from "../PostHeader/PostHeader";
import PostProblemPrevisualization from "../PostProblemPrevisualization/PostProblemPrevisualization";
import Button from "../Buttons/Button";

const PostProblem = ({ user, post, onClick }) => {
 return (
  <article className="post-problem">
   <PostHeader />
   <div className="post-problem__content">
    <PostProblemPrevisualization />
    <div className="post-problem__actions">
     <Button active onClick={onClick}>
      See More!
     </Button>
    </div>
   </div>
  </article>
 );
};

export default PostProblem;
