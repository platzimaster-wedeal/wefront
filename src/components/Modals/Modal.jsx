import React from "react";
import { MdClose } from "react-icons/md";

// Styles
import "../../assets/styles/components/Modal/Modal.scss";

// Components
import SmallButtonCA from "../Buttons/SmallButtonCA";

const Modal = ({ children, title, onClose }) => {
 return (
  <div className="modal">
   <div className="modal__title">
    <h2>{title || "Title of Modal"}</h2>
   </div>
   <div className="modal__content">{children}</div>
   <div className="modal__action">
    <SmallButtonCA icon={MdClose} closeBtn onClick={onClose} />
   </div>
  </div>
 );
};

export default Modal;
