import React from "react";

// Styles
import "../../assets/styles/components/Deals/Deals.scss";

// Components
import ProblemStatusCard from "../ProblemStatusCard/ProblemStatusCard";
import Loading from "../Loading/Loading";

const Deals = ({ deals, isLoading, isError }) => {
 return (
  <article className="deals">
   <div className="deals__header">
    <h3>My Deals</h3>
   </div>
   <div className="deals__list">
    {isLoading ? (
     <Loading />
    ) : isError ? (
     <span>We sorry, something went wrong</span>
    ) : deals && deals.length > 0 ? (
     deals.map((deal, i) => (
      <ProblemStatusCard
       key={i}
       nameProblem={deal.title}
       idProblem={deal.id || deal.problem_id}
       statusProblem={deal.status}
      />
     ))
    ) : (
     <span>You don't have current Deals</span>
    )}
   </div>
  </article>
 );
};

export default Deals;
