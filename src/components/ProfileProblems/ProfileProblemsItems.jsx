import React from "react";
import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import "../../assets/styles/components/ProfileProblems/ProfileProblemsItems.scss";

const ProfileProblemsItems = ({ problemId = "1", title }) => {
 return (
  <Link className="ProfileProblems__item" to={`/detail/problem/${problemId}`}>
   <MdErrorOutline className="ProfileProblems__item--icon" />
   <p className="ProfileProblems__id">#{title}</p>
  </Link>
 );
};

export default ProfileProblemsItems;
