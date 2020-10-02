import React from "react";
import { MdErrorOutline, MdCheckCircle } from "react-icons/md";

// Styles
import "../../assets/styles/components/ModalMessage/ModalMessage.scss";

// Components
import Button from "../Buttons/Button";
import InputFile from "../inputFile/InputFile";

const ModalAddImage = ({ title, message, placeholder, onClick }) => {
 return (
  <div className="cardSelect">
   <div className="cardSelect__form--select">
    <strong>{title || "Change Image"}</strong>
    <InputFile placeholder={placeholder || "Select an image"} />
   </div>
   <div className="cardSelect__form--buttons">
    <Button active onClick={onClick}>
     Change!
    </Button>
   </div>
  </div>
 );
};

export default ModalAddImage;
