import React from "react";
import { MdCameraAlt, MdClose, MdFilterList, MdModeEdit } from "react-icons/md";
import SmallButtonCA from "../components/Buttons/SmallButtonCA";
import SmallButtonSA from "../components/Buttons/SmallButtonSA";
import ButtonAction from "../components/Buttons/ButtonAction";
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
   <ButtonAction icon={MdFilterList} width="100px" height="100px"  />
   <SmallButtonSA icon={MdModeEdit} width="100px" height="100px" fontSize='60px'  />
  </div>
 );
};

export default Draw;
