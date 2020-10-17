import React from "react";
import { useHistory } from 'react-router-dom'
import { MdAdd } from "react-icons/md";
import ButtonAction from "../Buttons/ButtonAction";
import ProfileProblemsItems from "./ProfileProblemsItems";

import "../../assets/styles/components/ProfileProblems/ProfileProblemsContainer.scss";

const ProfileProblemsContainer = ({ isProfile = false, problems = [] }) => {
const history = useHistory()
const goToProblems = () => history.push('/problems')

 return (
  <div className="ProfileProblems__container">
   <h3 className="ProfileProblems__title">Problems Of Mine</h3>
   <hr />
   {isProfile ? (
    <ButtonAction className="ProfileProblems__icon--add" icon={MdAdd} onClick={goToProblems} />
   ) : null}
   {problems && problems.length > 0 ? (
    problems.map((problem) => (
     <ProfileProblemsItems key={problem.problem_id} title={problem.title} problemId={problem.problem_id} />
    ))
   ) : (
    <span>No problems for now </span>
   )}
  </div>
 );
};

export default ProfileProblemsContainer;
