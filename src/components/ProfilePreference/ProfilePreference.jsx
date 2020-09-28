import React from "react";
import { MdWork, MdPerson, MdSwapHoriz } from "react-icons/md";

// Styles
import "../../assets/styles/components/ProfilePreference/ProfilePreference.scss";

// Components
import SmallButtonCA from "../Buttons/SmallButtonCA";
import GraphicData from "../GraphicData/GraphicData";

const ProfilePreference = ({ isWorker }) => {
 return (
  <div className="profile-preference">
   <div className="profile-preference__title">
    <strong>Profile Preference:</strong>
    <SmallButtonCA icon={MdSwapHoriz} />
   </div>
   <div className="profile-preference__preference">
    {isWorker ? (
     <GraphicData active value="Employ">
      {" "}
      <MdWork size="24" />{" "}
     </GraphicData>
    ) : (
     <GraphicData active value="Employeer">
      {" "}
      <MdPerson size="24" />{" "}
     </GraphicData>
    )}
   </div>
  </div>
 );
};

export default ProfilePreference;
