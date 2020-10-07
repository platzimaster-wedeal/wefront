import React, { useState } from "react";
import { MdWork, MdPerson, MdSwapHoriz } from "react-icons/md";

// Styles
import "../../assets/styles/components/ProfilePreference/ProfilePreference.scss";

// Components
import SmallButtonCA from "../Buttons/SmallButtonCA";
import GraphicData from "../GraphicData/GraphicData";
import ModalContainer from "../Modals/ModalContainer";
import Modal from "../Modals/Modal";
import SelectProfileType from "../SelectProfileType/SelectProfileType";

const ProfilePreference = ({ isWorker }) => {
 // Handle modal
 const [isModalPreference, setIsModalPreference] = useState(false);
 const handlePreference = () => setIsModalPreference(!isModalPreference);

 return (
  <div className="profile-preference">
   <div className="profile-preference__title">
    <strong>Profile Preference:</strong>
    <SmallButtonCA icon={MdSwapHoriz} onClick={handlePreference} />
   </div>
   <div className="profile-preference__preference">
    {isWorker ? (
     <GraphicData active value="Worker">
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

   {isModalPreference && (
    <ModalContainer>
     <Modal title="Profile Preference" onClose={handlePreference}>
      <SelectProfileType onClose={handlePreference}/>
     </Modal>
    </ModalContainer>
   )}
  </div>
 );
};

export default ProfilePreference;
