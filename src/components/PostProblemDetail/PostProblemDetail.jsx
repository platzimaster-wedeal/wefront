import React from "react";

// Styles
import "../../assets/styles/components/PostProblemDetail/PostProblemDetail.scss";

// Components
import PostHeader from "../PostHeader/PostHeader";
import PostProblemDescription from "../PostProblemDescription/PostProblemDescription";
import PostProblemPayment from "../PostProblemPayment/PostProblemPayment";
import PostProblemPrevisualization from "../PostProblemPrevisualization/PostProblemPrevisualization";
import PostProblemRequirements from "../PostProblemRequirements/PostProblemRequirements";
import Button from "../Buttons/Button";

const PostProblemDetail = ({ data }) => {
 return (
  <article className="post-problem-detail">
   <PostHeader />
   <PostProblemPrevisualization />
   <PostProblemDescription />
   <PostProblemRequirements />
   <PostProblemPayment />

   <div className="post-problem-detail__actions">
    <Button active>Apply!</Button>
   </div>
  </article>
 );
};

export default PostProblemDetail;
