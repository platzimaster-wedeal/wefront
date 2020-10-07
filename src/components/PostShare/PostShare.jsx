import React, { useState } from "react";

// Styles
import "../../assets/styles/components/PostShare/PostShare.scss";

// Components
import PostHeader from "../PostHeader/PostHeader";
import PostInteractions from "../PostInteractions/PostInteractions";
import PostComments from "../PostComments/PostComments";

const PostShare = ({ post, comments = false }) => {
 const [seeComments, setSeeComments] = useState(true);

 return (
  <article className="post-share">
   <PostHeader
    name={post.user_firstname}
    avatar={post.user_avatar}
    id={post.id_user}
    share
   />
   <div className="post-share__content">
    <p>
     {post && post.content
      ? post.content
      : "Optional description until I know what to put here, besides, a need to know how it looks :D"}
    </p>
    <PostInteractions favs={post.total_likes} shares={post.total_shares} />
   </div>
   {/* <div className="post-share__comments">
    {comments && seeComments && comments.length > 0 && (
     <PostComments comments={comments} isPost />
    )}
   </div> */}
  </article>
 );
};

export default PostShare;
