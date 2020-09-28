import React from "react";
import PhotoUser from "../../assets/static/img/users/user.jpg";

// Styles
import "../../assets/styles/components/PostMessage/PostMessage.scss";

// Components
import ProfilePicture from "../ProfilePictures/ProfilePicture";
import MessageActions from "../MessageActions/MessageActions";

const Message = ({
 name = "Tupac Shakur",
 userImg,
 favs,
 message,
 isPost,
 isUser,
}) => {
 return (
  <article className={`message ${isUser && "message--user"}`}>
   {isPost && (
    <figure className="message__photo">
     <ProfilePicture source={userImg || PhotoUser} />
    </figure>
   )}

   <div className={`message__content ${isUser && "message__content--user"}`}>
    <div className="message__content--msg">
     <strong>{name}</strong>
     <p>{message || "Some message here pls"}</p>
    </div>
    {isPost && (
     <div className="message__content--actions">
      <MessageActions />
     </div>
    )}
   </div>
  </article>
 );
};

export default Message;
