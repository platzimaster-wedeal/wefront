import React from "react";
import { useHistory } from "react-router-dom";

// Imgs
import UserPhoto from "../../assets/static/img/users/user.jpg";

// Stlyes
import "../../assets/styles/components/PostHeader/PostHeader.scss";

// Components
import ProfilePicture from "../ProfilePictures/ProfilePicture";
import Labels from "../Labels/Labels";

const PostHeader = ({ id = 20, name, share, time, profession, picture }) => {
 const history = useHistory();
 const goToProfile = () => history.push(`/user/profile/${id}`);

 return (
  <section className="post-header">
   <figure className="post-header__picture" onClick={goToProfile}>
    <ProfilePicture active source={picture || UserPhoto} alt={name} />
   </figure>
   <div className="post-header__user-info">
    <div className="post-header__user-info--main">
     <h3 onClick={goToProfile}>{name || "Alan Walks"}</h3>
     <span>{share ? "Has shared!" : "Has a new problem!"}</span>
    </div>
    <strong className="post-header__user-info--profession">
     {share && profession && "Engineer"}
     {!share && <Labels name="Engineer" />}
    </strong>
   </div>
   <small className="post-header__time">{time || "1hr"}</small>
  </section>
 );
};

export default PostHeader;
