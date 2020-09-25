import React, { useState } from "react";

// Styles
import "../../assets/styles/components/FeedGeneral/FeedGeneral.scss";

// Component
import PostDefineType from "../PostDefineType/PostDefineType";
import PostProblemDetail from "../PostProblemDetail/PostProblemDetail";

const FeedGeneral = ({ page = "/", isConfigure }) => {
 const [isDetail, setIsDetail] = useState(false);
 const [isDetailProblem, setIsDetailProblem] = useState(true);

 const handleDetailProblem = () => {
  setIsDetail(!isDetail);
  setIsDetailProblem(true);
 };
 const handleDetailWorker = () => {
  setIsDetail(!isDetail);
  setIsDetailProblem(false);
 };

 const data = [
  {
   type: "share",
  },
  {
   type: "problem",
  },
  {
   type: "share",
  },
 ];

 if (isConfigure === true) {
  return (
   <section className="feed-general">Configure Component Profile :D</section>
  );
 }

 return (
  <section className="feed-general">
   {page === "user" && !isDetail && (
    <a onClick={handleDetailWorker}>WorkerPrevComponent</a>
   )}
   {!isDetail &&
    data.map((post, id) => (
     <PostDefineType key={id} data={post} onClick={handleDetailProblem} />
    ))}
   {isDetail && <PostProblemDetail />}
  </section>
 );
};

export default FeedGeneral;
