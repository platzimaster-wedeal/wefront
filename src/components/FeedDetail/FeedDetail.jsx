import React from "react";
import { useHistory } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

// Styles
import "../../assets/styles/components/FeedDetail/FeedDetail.scss";

const FeedDetail = ({ children, title = "Title of feed" }) => {
 const history = useHistory();

 const goBack = () => history.goBack();

 return (
  <section className="feed-detail">
   <div className="feed-detail__header">
    <div onClick={goBack}>
     <MdKeyboardBackspace size={30} />
    </div>
    <h2>{title}</h2>
   </div>
   <div>{children}</div>
  </section>
 );
};

export default FeedDetail;
