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
   <PostHeader id={post && post.user_id} name={post && post.employer_name} picture={post.user_avatar} />
   <div className="post-problem__content">
    <PostProblemPrevisualization 
      title={post && post.category}
      idProblem={post && post.id}
      short_description={post && post.short_description}
      modality={post && post.modality}
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
