import React from "react";
import {
 MdCameraAlt,
 MdClose,
 MdModeEdit,
 MdAdd,
 MdCheck,
} from "react-icons/md";
import SmallButtonCA from "../components/Buttons/SmallButtonCA";
import ButtonAction from "../components/Buttons/ButtonAction";
import SmallButtonSA from "../components/Buttons/SmallButtonSA";
import Button from "../components/Buttons/Button";
import Label from "../components/Labels/Labels";
import ProfilePicture from "../components/ProfilePictures/ProfilePicture";
import julioPhoto from "../assets/static/img/julio.jpg";
import user from "../assets/static/img/users/user.jpg";
import visitor from "../assets/static/img/users/visitor.jpg";
import Requirements from "../components/Requirements/Requirements";
import Location from "../components/GraphicData/Location";
import Followers from "../components/GraphicData/Followers";
import PersonCard from "../components/PersonCard/PersonCard";
import StrategyCard from "../components/StrategyCard/StrageyCard";
import ProfileSmallCard from "../components/ProfileSmallCard/ProfileSmallCard";
import SelectProfileType from "../components/SelectProfileType/SelectProfileType";
import "../assets/styles/components/Draw/Draw.scss";

const Draw = () => {
 return (
  <>
   <div className="julio__components__test container__test">
    <ButtonAction icon={MdModeEdit} />
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
    <ProfilePicture source={user} alt="Julio Picture" />
   </div>
   <div className="julio__components__test container__test">
    <StrategyCard
     icon={MdAdd}
     imgSource={user}
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
     imgSource={user}
     placeholder="What is your deal?"
     title="Do you agree the deal of Alan?"
    />{" "}
    <br />
   </div>
   <div className="julio__components__test container__test">
    <PersonCard
     imgSource={julioPhoto}
     title="Julio Denis"
     subtitle="FullStack Develop">
     Hi I'm Julio Denis
    </PersonCard>
    <br />
    <ProfileSmallCard
     subtitle="FullStack Developer"
     title="Julio Denis"
     altImage="Julio Smiling"
     imageSource={user}>
     {(hovered) =>
      hovered ? (
       <PersonCard
        className="personCard"
        imgSource={user}
        title="Julio Denis"
        subtitle="FullStack Develop">
        Hi I'm Julio Denis
       </PersonCard>
      ) : (
       false
      )
     }
    </ProfileSmallCard>
    <ProfileSmallCard
     subtitle="FullStack Developer"
     title="Julio Denis"
     altImage="Julio Smiling"
     imageSource={julioPhoto}>
     {(hovered) =>
      hovered ? (
       <PersonCard
        className="personCard"
        imgSource={julioPhoto}
        title="Julio Denis"
        subtitle="FullStack Develop">
        Hi I'm Julio Denis
       </PersonCard>
      ) : (
       false
      )
     }
    </ProfileSmallCard>
    <ProfileSmallCard
     subtitle="FullStack Developer"
     title="Person 1"
     altImage="Julio Smiling"
     imageSource={visitor}
     active>
     {(hovered) =>
      hovered ? (
       <PersonCard
        className="personCard"
        imgSource={visitor}
        title="Person 1"
        subtitle="FullStack Develop"
        hovered={hovered}>
        Hi I'm Julio Denis
       </PersonCard>
      ) : (
       false
      )
     }
    </ProfileSmallCard>
   </div>
   <div className="julio__components__test container__test">
    <SelectProfileType />
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
