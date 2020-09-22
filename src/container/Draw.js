import React from "react";
import { MdCameraAlt, MdClose } from "react-icons/md";
import SmallButtonCA from "../components/Buttons/SmallButtonCA";
import "../assets/styles/components/Draw/Draw.scss";

const Draw = () => {
 return (
  <div className="button__container">
   <SmallButtonCA
    icon={MdCameraAlt}
    width="100px"
    height="100px"
    closeBtn={false}
   />
   <SmallButtonCA icon={MdClose} width="100px" height="100px" closeBtn />
  </div>
 );
};

export default Draw;
