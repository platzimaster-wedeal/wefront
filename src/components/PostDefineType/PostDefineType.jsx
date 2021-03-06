import React from "react";
import { useHistory } from "react-router-dom";

import PostShare from "../PostShare/PostShare";
import PostProblem from "../PostProblem/PostProblem";

const PostDefineType = ({ data }) => {
 const history = useHistory();
 const goToDetail = (id) => history.push(`/detail/problem/${id}`);

 switch (data.type_post) {
  case true:
   return <PostShare post={data} />;
   break;
  case 1:
   return <PostShare post={data} />;
   break;
  case null:
   return <PostProblem post={data} onClick={goToDetail} />;
   break;
  case false:
   return <PostProblem post={data} onClick={goToDetail} />;
   break;

  default:
   return <PostProblem post={data} onClick={goToDetail} />;
   break;
 }
};

export default PostDefineType;
