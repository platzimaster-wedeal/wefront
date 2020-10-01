import React from "react";
import ReactDOM from "react-dom";

// Styles
import "../../assets/styles/components/Modal/ModalContainer.scss";

const ModalContainer = ({ children }) => {
 return ReactDOM.createPortal(
  <section className="modal-container">{children || "Hello world"}</section>,
  window.document.getElementById("app-modal")
 );
};

export default ModalContainer;
