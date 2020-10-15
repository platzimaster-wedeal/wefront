import React from "react";
import { MdAdd } from "react-icons/md";
import ButtonAction from "../Buttons/ButtonAction";
import ProfileProblemsItems from "./ProfileProblemsItems";

import "../../assets/styles/components/ProfileProblems/ProfileProblemsContainer.scss";

const ProfileProblemsContainer = ({ isProfile = false, problems = [] }) => {
 return (
  <div className="ProfileProblems__container">
   <h3 className="ProfileProblems__title">Problems Of Mine</h3>
   <hr />
   {isProfile ? (
    <ButtonAction className="ProfileProblems__icon--add" icon={MdAdd} />
   ) : null}
   {problems && problems.length > 0 ? (
    problems.map((problem) => (
     <ProfileProblemsItems key={problem} problemId={150 + problem} />
    ))
   ) : (
    <span>No problems for now </span>
   )}
  </div>
 );
};

export default ProfileProblemsContainer;
