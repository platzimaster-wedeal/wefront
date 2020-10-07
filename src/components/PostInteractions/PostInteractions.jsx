import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdShare } from "react-icons/md";
import { MdInsertComment } from "react-icons/md";
import "../../assets/styles/components/InteractionsPost/InteractionsPost.scss";

const PostInteractions = ({ favs, shares, comments }) => {
 const [activeFavs, setActiveFavs] = useState(false);
 const [activeShare, setActiveShare] = useState(false);
 const [activeComments, setActiveComments] = useState(false);

 const handelFavsClick = () => {
  activeFavs ? setActiveFavs(false) : setActiveFavs(true);
 };

 const handelShareClick = () => {
  activeShare ? setActiveShare(false) : setActiveShare(true);
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
    onClick={() => handelShareClick()}
    type="button"
    className="interactionsPost__shares ">
    {activeShare ? (
     <MdShare className="interactionsPost__icon--active" />
    ) : (
     <MdShare className="interactionsPost__icon--inactive" />
    )}
    {shares} Shares
   </button> */}
   <button
    onClick={() => handelCommentsClick()}
    type="button"
    className="interactionsPost__comments">
    {activeComments ? (
     <MdInsertComment className="interactionsPost__icon--active" />
    ) : (
     <MdInsertComment className="interactionsPost__icon--inactive" />
    )}
    {comments} Comments
   </button>
  </div>
 );
};

export default PostInteractions;
