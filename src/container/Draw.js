import React from "react";
import {
 MdAdd,
 MdDone,
 MdModeEdit,
 MdRemoveRedEye,
 MdFilterList,
} from "react-icons/md";
import ButtonAction from "../components/Buttons/ButtonAction";
import "../assets/styles/components/Draw/Draw.scss";

const Draw = () => {
 return (
  <div className="button__container">
   <ButtonAction icon={MdDone} width="100px" height="100px" />
   <ButtonAction icon={MdAdd} width="100px" height="100px" />
   <ButtonAction
    icon={MdModeEdit}
    width="100px"
    height="100px"
    fontSize="50px"
   />
   <ButtonAction
    icon={MdRemoveRedEye}
    width="60px"
    height="60px"
    fontSize="35px"
   />
   <ButtonAction
    icon={MdFilterList}
    width="60px"
    height="60px"
    fontSize="35px"
   />
   <ButtonAction icon={MdAdd} width="60px" height="60px" fontSize="35px" />
   <ButtonAction icon={MdAdd} width="30px" height="30px" fontSize="25px" />
  </div>
 );
};

export default Draw;
