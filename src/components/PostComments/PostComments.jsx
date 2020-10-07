import React, { useState } from "react";
import PhotoUser from "../../assets/static/img/users/user.jpg";

// Styles
import "../../assets/styles/components/PostComments/PostComments.scss";

// Components
import ProfilePicture from "../ProfilePictures/ProfilePicture";
import Message from "../Message/Message";

const PostComments = ({
 comments = ["Hello, how are you?", "welcome here"],
 userPhoto,
}) => {
 const [showAll, setShowAll] = useState(false);

 const RenderMsgs = () => {
  if (showAll)
   return comments.map((msg, i) => <Message isPost message={msg} key={i} />);

  return <Message isPost message={comments[0]} />;
 };

 const handleComments = () => {
  setShowAll(!showAll);
 };

 return (
  <section className="post-comments">
   {!showAll ? (
    <strong onClick={handleComments} className="post-comments__action">
     See all comments
    </strong>
   ) : (
    <strong onClick={handleComments} className="post-comments__action">
     Hide comments
    </strong>
   )}
   <div className="post-comments__messages">{RenderMsgs()}</div>
   <div className="post-comments__user-comment">
    <ProfilePicture source={userPhoto || PhotoUser} />
    <input type="text" placeholder="What are you thinking?" />
   </div>
  </section>
 );
};

export default PostComments;
