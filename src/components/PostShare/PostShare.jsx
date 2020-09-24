import React from "react";

// Styles
import "../../assets/styles/components/PostShare/PostShare.scss";

// Components
import PostHeader from "../PostHeader/PostHeader";
import PostInteractions from "../PostInteractions/PostInteractions";

const PostShare = ({ share, user, post }) => {
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
  </article>
 );
};

export default PostShare;
