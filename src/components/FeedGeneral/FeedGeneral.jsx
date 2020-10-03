import React, { useState } from "react";

// Styles
import "../../assets/styles/components/FeedGeneral/FeedGeneral.scss";

// Component
import PostDefineType from "../PostDefineType/PostDefineType";
import PostProblemDetail from "../PostProblemDetail/PostProblemDetail";
import Loading from "../../components/Loading/Loading";


const FeedGeneral = ({ data = [] }) => {

 return (
  <section className="feed-general">
   { data && data.length > 0 ? data.map((post, id) => (
     <PostDefineType key={id} data={post} />
    )) : (
      <Loading />
    ) 
    
    }
  </section>
 );
};

export default FeedGeneral;
