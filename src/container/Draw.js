import React, { Fragment } from "react";
import { MdCameraAlt, MdClose, MdFilterList, MdModeEdit } from "react-icons/md";
import SmallButtonCA from "../components/Buttons/SmallButtonCA";
import SmallButtonSA from "../components/Buttons/SmallButtonSA";
import ButtonAction from "../components/Buttons/ButtonAction";
import Button from "../components/Buttons/Button";
import Label from "../components/Labels/Labels";
import ProfilePicture from "../components/ProfilePictures/ProfilePicture";
import julioPhoto from "../assets/static/img/julio.jpg";
import "../assets/styles/components/Draw/Draw.scss";

const Draw = () => {
 return (
  <>
   <div className="julio__components__test container__test">
    <SmallButtonCA
     icon={MdCameraAlt}
     width="100px"
     height="100px"
     closeBtn={false}
    />
    <SmallButtonCA icon={MdClose} width="100px" height="100px" closeBtn />
    <ButtonAction icon={MdFilterList} width="100px" height="100px" />
    <SmallButtonSA
     icon={MdModeEdit}
     width="100px"
     height="100px"
     fontSize="60px"
    />
    <Button active>Make Deal!</Button>
    <Button>Make Deal!</Button>
    <ProfilePicture source={julioPhoto} alt="Julio Picture" active />
    <ProfilePicture source={julioPhoto} alt="Julio Picture" />
   </div>
   <div className="andres__components__test container__test">
    <Label name="Enginner" active />
   </div>
  </>
 );
};

export default Draw;
