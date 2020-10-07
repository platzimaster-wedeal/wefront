import React, { useState } from "react";

// Styles
import "../../assets/styles/components/FeedGeneral/FeedGeneral.scss";

// Component
import PostDefineType from "../PostDefineType/PostDefineType";
import PostProblemDetail from "../PostProblemDetail/PostProblemDetail";
import Loading from "../../components/Loading/Loading";


const FeedGeneral = ({ data = [], isLoading, isError }) => {

 return (
  <section className="feed-general">
   { isError ? <span>{isError}</span> : isLoading ? <Loading /> : data && data.length > 0 ? data.map((post,i) => (
     <PostDefineType key={i} data={post} />
    )) : (
      <span>There is no posts!!</span>
    ) 
    
    }
  </section>
 );
};

export default FeedGeneral;
