import React from "react";
import { MdHelpOutline } from "react-icons/md";

// Styles
import "../../assets/styles/components/ModalMessage/ModalMessage.scss";

// Component
import Button from "../Buttons/Button";

const ModalVerification = ({ message, onClose, onClick }) => {
 return (
  <div className="modal-message">
   <MdHelpOutline size="120" />

   <p className="modal-message__content">
    {message || "Message of the notification of the action"}
   </p>
   <div className="modal-message__actions">
    <Button active onClick={onClick}>
     Yes!
    </Button>
    <Button onClick={onClose}>No</Button>
   </div>
  </div>
 );
};

export default ModalVerification;
