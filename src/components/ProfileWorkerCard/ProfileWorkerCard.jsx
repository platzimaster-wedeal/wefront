import React from "react";
import { Link } from "react-router-dom";
import { MdDone, MdPeople } from "react-icons/md";

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
 id,
 onClick = () => {}
}) => {
 return (
  <article className="profile-worker-card">
   <figure className="profile-worker-card__picture">
    <ProfilePicture source={picture || PhotoUser} alt={name} />
   </figure>

   <div className="profile-worker-card__content">
    <Link className="profile-worker-card__content-header" to={`/user/profile/${id}`}>
     <h3>{name}</h3>
     {/* <small>{profession}</small> */}
    </Link>

    <ButtonAction
     icon={MdDone}
     className="profile-worker-card__content-action"
     onClick={onClick}
    />
   </div>
  </article>
 );
};

export default ProfileWorkerCard;
