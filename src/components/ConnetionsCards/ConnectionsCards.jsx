import React from "react";
import { MdSearch } from "react-icons/md";
import ProfileSmallCard from "../ProfileSmallCard/ProfileSmallCard";
import PersonCard from "../PersonCard/PersonCard";
import "../../assets/styles/components/ConnectionsCards/ConnectionsCards.scss";
import julioPhoto from "../../assets/static/img/users/user.jpg";

const ConnectionsCards = () => {
 const handleSearchConnection = () => {
  alert("Searching");
 };

 return (
  <div className="ConnectionsCards__container">
   <div className="ConnectionsCards__input__icon">
    <input
     className="ConnectionsCards__input"
     type="text"
     placeholder="Connections"
    />
    <MdSearch
     className="ConnectionsCards__icon"
     onClick={() => handleSearchConnection()}
    />
   </div>
   <hr />
   <div className="ConnectionsCards__container--list">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((person) => (
     <ProfileSmallCard
      Key={person}
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
    ))}
   </div>
  </div>
 );
};

export default ConnectionsCards;
