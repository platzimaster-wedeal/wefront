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
import PostProblemStatus from "../PostProblemStatus/PostProblemStatus";

const PostProblemDetail = ({ data, isWorker, isSolving = false }) => {
 const defineAction = () => {
  if (isSolving) return <PostProblemStatus status={isSolving} />;

  if (isWorker && !isSolving) return <Button active>Apply!</Button>;
 };

 return (
  <article className="post-problem-detail">
   <PostHeader />
   <PostProblemPrevisualization />
   <PostProblemDescription />
   <PostProblemRequirements />
   {!isSolving ? (
    <PostProblemPayment />
   ) : (
    <PostProblemPayment agreed agreedPrice={922} />
   )}

   <div className="post-problem-detail__actions">{defineAction()}</div>
   {!isWorker && !isSolving && <Button active>Edit!</Button>}
   {!isWorker && isSolving && <Button active> Status </Button>}
  </article>
 );
};

export default PostProblemDetail;
