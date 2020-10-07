import React from "react";
import { useHistory } from "react-router-dom";


// Stlyes
import "../../assets/styles/components/PostHeader/PostHeader.scss";

// Components
import ProfilePicture from "../ProfilePictures/ProfilePicture";
import Labels from "../Labels/Labels";

const PostHeader = ({ id, name, share, time, profession, picture }) => {
 const history = useHistory();
 const DEFAULT_IMG = 'https://imgurl.me/images/2020/09/11/profilededaultbb7053428141edf1.png'
 const goToProfile = () => history.push(`/user/profile/${id}`);

 return (
  <section className="post-header">
   <figure className="post-header__picture" onClick={goToProfile}>
    <ProfilePicture active source={picture || DEFAULT_IMG } alt={name} />
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
