import React from "react";
import { MdErrorOutline, MdCheckCircle } from "react-icons/md";

// Styles
import "../../assets/styles/components/ModalMessage/ModalMessage.scss";

// Components
import Button from "../Buttons/Button";

const ModalMessage = ({ type, message, onClose }) => {
 return (
  <div className="modal-message">
   {type === "error" ? (
    <MdErrorOutline size="120" />
   ) : (
    <MdCheckCircle size="120" />
   )}
   <p className="modal-message__content">
    {message || "Message of the notification of the action"}
   </p>
   <div className="modal-message__action">
    <Button active onClick={onClose}>
     {type === "error" ? "Close" : "Great"}
    </Button>
   </div>
  </div>
 );
};

export default ModalMessage;
