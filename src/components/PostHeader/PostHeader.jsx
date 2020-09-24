import React from "react";

// Imgs
import UserPhoto from "../../assets/static/img/users/user.jpg";

// Stlyes
import "../../assets/styles/components/PostHeader/PostHeader.scss";
import ProfilePicture from "../ProfilePictures/ProfilePicture";

const PostHeader = ({ name, share, time, profession, picture }) => {
 return (
  <section className="post-header">
   <figure className="post-header__picture">
    <ProfilePicture active source={picture || UserPhoto} alt={name} />
   </figure>
   <div className="post-header__user-info">
    <div className="post-header__user-info--main">
     <h3>{name || "Alan Walks"}</h3>
     <span>{share ? "Has shared!" : "Has a new problem!"}</span>
    </div>
    <strong className="post-header__user-info--profession">
     {profession || "Engineer"}
    </strong>
   </div>
   <small className="post-header__time">{time || "1hr"}</small>
  </section>
 );
};

export default PostHeader;
