import React from "react";
import { useHistory } from "react-router-dom";

// Styles
import "../../assets/styles/components/PostProblem/PostProblem.scss";

// Components
import PostHeader from "../PostHeader/PostHeader";
import PostProblemPrevisualization from "../PostProblemPrevisualization/PostProblemPrevisualization";
import Button from "../Buttons/Button";

const PostProblem = ({ user, post, onClick }) => {
 const history = useHistory();

 const goToDetail = () => {
  history.push("/detail/problem");
 };

 return (
  <article className="post-problem">
   <PostHeader />
   <div className="post-problem__content">
    <PostProblemPrevisualization />
    <div className="post-problem__actions">
     <Button active onClick={goToDetail}>
      See More!
     </Button>
    </div>
   </div>
  </article>
 );
};

export default PostProblem;
