import React, { useState } from "react";
import PhotoUser from "../../assets/static/img/users/user.jpg";

// Stlyes
import "../../assets/styles/Components/HeaderSearchResults/HeaderSearchResults.scss";

// Components
import ProfileSmallCard from "../ProfileSmallCard/ProfileSmallCard";
import PersonCard from "../PersonCard/PersonCard";

const HeaderSearchResults = ({ results = [] }) => {
 const [viewPersons, setViewPersons] = useState(true);

 const handleViewPersons = () => {
  setViewPersons(!viewPersons);
 };

 const RenderPersons = (hovered) => {
  if (hovered) {
   return (
    <PersonCard
     className="personCard"
     imgSource={PhotoUser}
     title="Tupac Shakur"
     subtitle="Musician">
     Live and dead for music.
    </PersonCard>
   );
  }

  return null;
 };

 const RenderProblems = (hovered) => {
  if (hovered) {
   return (
    <PersonCard
     className="personCard"
     imgSource={PhotoUser}
     title="Tupac Shakur"
     subtitle="Musician">
     Problem Status Card
    </PersonCard>
   );
  }

  return null;
 };

 return (
  <div className="header-search-results">
   <div className="header-search-results__header">
    <strong
     className={viewPersons && "header-search-results__header--active"}
     onClick={handleViewPersons}>
     Persons
    </strong>
    <strong
     className={!viewPersons && "header-search-results__header--active"}
     onClick={handleViewPersons}>
     Problems
    </strong>
   </div>
   <section className="header-search-results__results">
    {results && results.length > 0 ? (
     results.map((resp, i) => (
      <ProfileSmallCard
       key={i}
       imageSource={PhotoUser}
       altImage="Name"
       title="Tupac Shakur"
       subtitle="Musician">
       {(hovered) =>
        viewPersons ? RenderPersons(hovered) : RenderProblems(hovered)
       }
      </ProfileSmallCard>
     ))
    ) : (
     <span>Sorry, we can't found what you looking for</span>
    )}
   </section>
  </div>
 );
};

export default HeaderSearchResults;
