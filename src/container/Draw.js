import React from "react";
import PersonCard from "../components/PersonCard/PersonCard";
import ProfileSmallCard from "../components/ProfileSmallCard/ProfileSmallCard";
import "../assets/styles/components/Draw/Draw.scss";
import ShareAndApplyContainer from "../components/ShareAndApplyContainer/ShareAndApplyContainer";

import julioPhoto from "../assets/static/img/julio.jpg";

const Draw = () => {
 return (
  <div>
   <div className="julio__components__test container__test">
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
     title="Julio Denis"
     altImage="Julio Smiling"
     imageSource={julioPhoto}>
     {(hovered) =>
      hovered ? (
       <PersonCard
        className="personCard"
        imgSource={julioPhoto}
        title="Julio Denis"
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

   <div className="container__test">
    <ShareAndApplyContainer
     title="Create Your Share!"
     profileName="Julio Denis"
     profileImg={julioPhoto}
    />
   </div>
  </div>
 );
};

export default Draw;
