import React from "react";
import { MdSearch } from "react-icons/md";
import ProfileSmallCard from "../ProfileSmallCard/ProfileSmallCard";
import PersonCard from "../PersonCard/PersonCard";
import Loading from "../Loading/Loading";
import "../../assets/styles/components/ConnectionsCards/ConnectionsCards.scss";
import julioPhoto from "../../assets/static/img/users/user.jpg";

const ConnectionsCards = ({ connections, isLoading, isError = null }) => {
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
    {isError ? (
     <span>{isError}</span>
    ) : isLoading ? (
     <Loading />
    ) : connections && connections.length > 0 ? (
     connections.map((person) => (
      <ProfileSmallCard
       Key={person.id_user}
       idUser={person.id_user}
       subtitle={person.last_name}
       title={person.first_name}
       altImage={person.first_name}
       imageSource={person.avatar}>
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
     ))
    ) : (
     <span>You don't have connections yet</span>
    )}
   </div>
  </div>
 );
};

export default ConnectionsCards;
