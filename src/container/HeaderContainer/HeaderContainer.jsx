import React, { useState } from "react";

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";

const HeaderContainer = ({ children }) => {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const handleModal = () => setIsModalOpen(false);

 return (
  <div>
   <HeaderSearch />
   {children}
   {isModalOpen && (
    <ModalContainer>
     <Modal onClose={handleModal} />
    </ModalContainer>
   )}
  </div>
 );
};

export default HeaderContainer;
