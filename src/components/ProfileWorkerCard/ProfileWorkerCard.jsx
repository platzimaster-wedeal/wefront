import React from "react";
import { MdRemoveRedEye, MdPeople } from "react-icons/md";

// Imgs
import PhotoUser from "../../assets/static/img/users/user.jpg";

// Stlyes
import "../../assets/styles/components/ProfileWorkerCard/ProfileWorkerCard.scss";

// Components
import GraphicData from "../GraphicData/GraphicData";
import ProfilePicture from "../ProfilePictures/ProfilePicture";
import ButtonAction from "../Buttons/ButtonAction";

const ProfileWorkerCard = ({
 picture,
 name = "Tupac Shakur",
 profession = "Artist",
 description,
 follows = 24,
 onClick = () => {}
}) => {
 return (
  <article className="profile-worker-card">
   <figure className="profile-worker-card__picture">
    <ProfilePicture source={picture || PhotoUser} alt={name} />
   </figure>

   <div className="profile-worker-card__content">
    <div className="profile-worker-card__content-header">
     <h3>{name}</h3>
     <small>{profession}</small>
    </div>

    <ButtonAction
     icon={MdRemoveRedEye}
     className="profile-worker-card__content-action"
     onClick={onClick}
    />

    <small className="profile-worker-card__description">
     {description || "Hi there, I'm Tupac :D"}
    </small>

    <div className="profile-worker-card__stats">
     <GraphicData active value={follows}>
      <MdPeople size="24" />
     </GraphicData>
    </div>
   </div>
  </article>
 );
};

export default ProfileWorkerCard;
