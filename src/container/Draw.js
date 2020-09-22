import React from "react";
import { MdCameraAlt, MdAdd, MdModeEdit } from "react-icons/md";
import SmallButtonSA from "../components/Buttons/SmallButtonSA";
import "../assets/styles/components/Draw/Draw.scss";

const Draw = () => {
 return (
  <div className="button__container">
   <SmallButtonSA icon={MdCameraAlt} width="100px" height="100px" />
   <SmallButtonSA icon={MdAdd} width="100px" height="100px" />
   <SmallButtonSA icon={MdModeEdit} width="100px" height="100px" />
  </div>
 );
};

export default Draw;
