import React from "react";

// Styles
import "../../assets/styles/components/Modal/Modal.scss";

// Components
import Button from "../Buttons/Button";

const Modal = ({ children, title, onClose }) => {
 return (
  <div className="modal">
   <div className="modal__title">
    <h2>{title || "Title of Modal"}</h2>
   </div>
   <div className="modal__content">{children}</div>
   <div className="modal__action">
    <Button active onClick={onClose}>
     Close
    </Button>
   </div>
  </div>
 );
};

export default Modal;
