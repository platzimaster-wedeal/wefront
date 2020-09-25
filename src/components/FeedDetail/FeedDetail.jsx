import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

// Styles
import "../../assets/styles/components/FeedDetail/FeedDetail.scss";

const FeedDetail = ({ children, title = "Title of feed" }) => {
 return (
  <section className="feed-detail">
   <div className="feed-detail__header">
    <MdKeyboardBackspace size={30} />
    <h2>{title}</h2>
   </div>
   <div>{children}</div>
  </section>
 );
};

export default FeedDetail;
