import React from "react";

import PostShare from "../PostShare/PostShare";
import PostProblem from "../PostProblem/PostProblem";

const PostDefineType = ({ data, onClick }) => {
 switch (data.type) {
  case "share":
   return <PostShare />;
   break;
  case "problem":
   return <PostProblem onClick={onClick} />;
   break;
 }
};

export default PostDefineType;
