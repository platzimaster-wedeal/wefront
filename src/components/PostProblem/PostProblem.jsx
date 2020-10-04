import React from "react";
import { useHistory } from "react-router-dom";

// Styles
import "../../assets/styles/components/PostProblem/PostProblem.scss";

// Components
import PostHeader from "../PostHeader/PostHeader";
import PostProblemPrevisualization from "../PostProblemPrevisualization/PostProblemPrevisualization";
import Button from "../Buttons/Button";

const PostProblem = ({ post, onClick }) => {
 const history = useHistory();


 return (
  <article className="post-problem">
   <PostHeader id={post && post.id_user} name={post && post.employer_name} />
   <div className="post-problem__content">
    <PostProblemPrevisualization 
      title={post && post.title}
      idProblem={post && post.id}
      short_description={post && post.short_description}
    />
    <div className="post-problem__actions">
     <Button active onClick={() => onClick(post ? post.id : 1)}>
      See More!
     </Button>
    </div>
   </div>
  </article>
 );
};

export default PostProblem;
