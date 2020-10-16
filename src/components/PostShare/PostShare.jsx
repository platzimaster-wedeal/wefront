import React, { useState } from "react";

// Redux
import { useSelector } from 'react-redux'

// Styles
import "../../assets/styles/components/PostShare/PostShare.scss";

// Components
import PostHeader from "../PostHeader/PostHeader";
import PostInteractions from "../PostInteractions/PostInteractions";
import PostComments from "../PostComments/PostComments";

// Services
import { likePost, unlikePost } from '../../services/PostsServices/postsServices'

const PostShare = ({ post }) => {

// -------------- Redux
const { id } = useSelector(state => state.AuthReducer)

 const [seeComments, setSeeComments] = useState(true);

//  ------------- Handle Like
const [likes, setLikes] = useState(post.total_likes);
const onLike = async () => {
  try {
    const resp = await likePost(post.id, id)
    setLikes(prev => prev + 1)
  } catch(err) {
    console.log(err)
  }
}

const onUnlike = async () => {
  try {
    const resp = await unlikePost(post.id, id)
    setLikes(prev => prev - 1)
  } catch(err) {
    console.log(err)
  }
}

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
    <PostInteractions favs={likes} onLike={onLike} onUnlike={onUnlike} />
   </div>
   <div className="post-share__comments">
    {post.comment_content && seeComments && post.comment_content.length > 0 ? (
     <PostComments comments={post.comment_content} isPost />
    ) : (
      <span>There is no comments</span>   
    )
    }
   </div>
  </article>
 );
};

export default PostShare;
