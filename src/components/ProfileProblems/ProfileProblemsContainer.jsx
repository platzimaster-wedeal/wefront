import React from "react";
import { MdAdd } from "react-icons/md";
import ButtonAction from "../Buttons/ButtonAction";
import ProfileProblemsItems from "./ProfileProblemsItems";

import "../../assets/styles/components/ProfileProblems/ProfileProblemsContainer.scss";

const ProfileProblemsContainer = ({ auth = false }) => {
 return (
  <div className="ProfileProblems__container">
   <h3 className="ProfileProblems__title">Problems Of Mine</h3>
   <hr />
   {auth ? (
    <ButtonAction className="ProfileProblems__icon--add" icon={MdAdd} />
   ) : null}
   {[1, 2, 3].map((problem) => (
    <ProfileProblemsItems key={problem} problemId={150 + problem} />
   ))}
  </div>
 );
};

export default ProfileProblemsContainer;
