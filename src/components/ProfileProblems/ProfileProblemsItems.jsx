import React from "react";
import { MdErrorOutline } from "react-icons/md";
import "../../assets/styles/components/ProfileProblems/ProfileProblemsItems.scss";

const ProfileProblemsItems = ({ problemId }) => {
 return (
  <div className="ProfileProblems__item">
   <MdErrorOutline className="ProfileProblems__item--icon" />
   <p className="ProfileProblems__id">#{problemId}</p>
  </div>
 );
};

export default ProfileProblemsItems;
