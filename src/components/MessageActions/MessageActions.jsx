import React from "react";
import { MdFavoriteBorder, MdFavorite, MdReply } from "react-icons/md";

// Styles
import "../../assets/styles/components/MessageActions/MessageActions.scss";

import GraphicData from "../GraphicData/GraphicData";

const MessageActions = ({ favs = 0, isLiked }) => {
 return (
  <div className="message-actions">
   <div className="message-actions__fav">
    <GraphicData value={`${favs} favs`}>
     {isLiked ? <MdFavorite size="24" /> : <MdFavoriteBorder size="24" />}
    </GraphicData>
   </div>
   <div className="message-actions__reply">
    <GraphicData value="Reply">
     <MdReply size="24" />
    </GraphicData>
   </div>
  </div>
 );
};

export default MessageActions;
