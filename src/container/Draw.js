import React from "react";
import {
 MdCameraAlt,
 MdClose,
 MdModeEdit,
 MdAdd,
 MdCheck,
} from "react-icons/md";
import SmallButtonCA from "../components/Buttons/SmallButtonCA";
import SmallButtonSA from "../components/Buttons/SmallButtonSA";
import Button from "../components/Buttons/Button";
import Label from "../components/Labels/Labels";
import ProfilePicture from "../components/ProfilePictures/ProfilePicture";
import julioPhoto from "../assets/static/img/julio.jpg";
import Requirements from "../components/Requirements/Requirements";
import Location from "../components/GraphicData/Location";
import Followers from "../components/GraphicData/Followers";

import StrategyCard from "../components/StrategyCard/StrageyCard";
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
   <div className="julio__components__test container__test">
    <StrategyCard
     icon={MdAdd}
     imgSource={julioPhoto}
     placeholder="What is your deal?"
     title="Do you want to make a deal with Alan?"
    />{" "}
    <br />
    <StrategyCard
     icon={MdModeEdit}
     imgSource={julioPhoto}
     placeholder="What are you thinking?"
     title="Do you want share something, Alan?"
    />{" "}
    <br />
    <StrategyCard
     icon={MdCheck}
     imgSource={julioPhoto}
     placeholder="What is your deal?"
     title="Do you agree the deal of Alan?"
    />{" "}
    <br />
   </div>
   <div className="andres__components__test container__test">
    <Label name="Enginner" active />
    <Requirements title="Knowledge about hardaware of PCs" />
    <Location country="USA" />
    <Followers number="108" active />
   </div>
  </>
 );
};

export default Draw;
