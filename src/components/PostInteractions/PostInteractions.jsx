import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdShare } from "react-icons/md";
import { MdInsertComment } from "react-icons/md";
import "../../assets/styles/components/InteractionsPost/InteractionsPost.scss";

const PostInteractions = ({ favs, shares, comments, onLike = () => {}, onUnlike = () => {} }) => {
 const [activeFavs, setActiveFavs] = useState(false);
 const [activeShare, setActiveShare] = useState(false);
 const [activeComments, setActiveComments] = useState(false);

 const handelFavsClick = () => {
   if(activeFavs){
    setActiveFavs(false) 
    onUnlike()
   } else {
     setActiveFavs(true);
     onLike()
   }
  
 };

 const handelCommentsClick = () => {
  activeComments ? setActiveComments(false) : setActiveComments(true);
 };

 return (
  <div className="interactionsPost__container">
   <button
    onClick={() => handelFavsClick()}
    type="button"
    className="interactionsPost__favs">
    {activeFavs ? (
     <MdFavorite className="interactionsPost__icon--active" />
    ) : (
     <MdFavoriteBorder className="interactionsPost__icon--inactive" />
    )}
    {favs} Favs
   </button>
   {/* <button
    onClick={() => handelCommentsClick()}
    type="button"
    className="interactionsPost__comments">
    {activeComments ? (
     <MdInsertComment className="interactionsPost__icon--active" />
    ) : (
     <MdInsertComment className="interactionsPost__icon--inactive" />
    )}
    Comments
   </button> */}
  </div>
 );
};

export default PostInteractions;
