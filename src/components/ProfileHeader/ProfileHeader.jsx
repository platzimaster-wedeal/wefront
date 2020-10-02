import React, { useState } from "react";

// Styles
import "../../assets/styles/components/ProfileHeader/ProfileHeader.scss";

// Components
import ProfileHeaderPhoto from "../ProfileHeaderPhoto/ProfileHeaderPhoto";
import ProfileHeaderAction from "../ProfileHeaderActions/ProfileHeaderActions";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";
import ModalAddImage from "../../components/ModalAddImage/ModalAddImage";

const ProfileHeader = ({ description, profession, isUser = false }) => {
 // Handle Modal
 const [isModalChangeImg, setIsModalChangeImg] = useState(false);
 const handleModal = () => setIsModalChangeImg(!isModalChangeImg);

 return (
  <section className="profile-header">
   <ProfileHeaderPhoto isVisitor={isUser} onPhoto={handleModal} />
   <small className="profile-header__description">
    {description && description}
   </small>
   <strong className="profile-header__profession">
    {profession && profession}
   </strong>

   <div className="profile-header__actions">
    <ProfileHeaderAction isVisitor={isUser} />
   </div>
   {isModalChangeImg && (
    <ModalContainer>
     <Modal title="Change Image" onClose={handleModal}>
      <ModalAddImage title="Select a new image" />
     </Modal>
    </ModalContainer>
   )}
  </section>
 );
};

export default ProfileHeader;
