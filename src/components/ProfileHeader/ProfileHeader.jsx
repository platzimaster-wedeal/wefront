import React, { useState } from "react";

// Styles
import "../../assets/styles/components/ProfileHeader/ProfileHeader.scss";

// Components
import ProfileHeaderPhoto from "../ProfileHeaderPhoto/ProfileHeaderPhoto";
import ProfileHeaderAction from "../ProfileHeaderActions/ProfileHeaderActions";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";
import ModalAddImage from "../../components/ModalAddImage/ModalAddImage";

const ProfileHeader = ({ user, isUser = false }) => {
 // Handle Modal
 const [isModalChangeImg, setIsModalChangeImg] = useState(false);
 const handleModal = () => setIsModalChangeImg(!isModalChangeImg);

 return (
  <section className="profile-header">
    <ProfileHeaderPhoto 
      name={user && user.first_name}
      avatar={user && user.avatar}
      isProfile={isUser} 
      onPhoto={handleModal} 
    />
   <small className="profile-header__description">
    {user && user.description}
   </small>
   <strong className="profile-header__profession">
    {user && user.profession}
   </strong>

   <div className="profile-header__actions">
    <ProfileHeaderAction isProfile={isUser} />
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
