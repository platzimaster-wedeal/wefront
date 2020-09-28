import React, { useState } from "react";

// Styles
import "../../assets/styles/components/PostShare/PostShare.scss";

// Components
import PostHeader from "../PostHeader/PostHeader";
import PostInteractions from "../PostInteractions/PostInteractions";
import PostComments from "../PostComments/PostComments";

const PostShare = ({
 share,
 user,
 post,
 comments = ["Mesg", "Hello", "Damn"],
}) => {
 const [seeComments, setSeeComments] = useState(true);

 return (
  <article className="post-share">
   <PostHeader share />
   <div className="post-share__content">
    <p>
     {share && share.content
      ? share.content
      : "Optional description until I know what to put here, besides, a need to know how it looks :D"}
    </p>
    <PostInteractions />
   </div>
   <div className="post-share__comments">
    {comments && seeComments && comments.length > 0 && (
     <PostComments comments={comments} isPost />
    )}
   </div>
  </article>
 );
};

export default PostShare;
