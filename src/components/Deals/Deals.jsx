import React from "react";

// Styles
import "../../assets/styles/components/Deals/Deals.scss";

// Components
import ProblemStatusCard from "../ProblemStatusCard/ProblemStatusCard";

const Deals = ({ deals }) => {
 return (
  <article className="deals">
   <div className="deals__header">
    <h3>My Deals</h3>
   </div>
   <div className="deals__list">
    {deals && deals.length > 0 ? (
     deals.map((deal, i) => <ProblemStatusCard key={i} />)
    ) : (
     <span>You don't have current Deals</span>
    )}
   </div>
  </article>
 );
};

export default Deals;
