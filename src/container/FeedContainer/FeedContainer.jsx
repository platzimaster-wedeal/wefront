import React from "react";
import PhotoUser from "../../assets/static/img/users/user.jpg";

// Utils
import { defineTypeStrategy } from "../../utils/defineTypeStrategy";

// Components
import StrategyCard from "../../components/StrategyCard/StrageyCard";
import FeedGeneral from "../../components/FeedGeneral/FeedGeneral";

const FeedContainer = ({ strategyAction, type, data = [] }) => {
 const strategy = defineTypeStrategy(type);
 return (
  <div>
   <StrategyCard
    title={strategy.title}
    imgSource={PhotoUser}
    icon={strategy.icon}
    placeholder={strategy.placeholder}
    onClick={strategyAction}
   />
   <FeedGeneral data={data} />
  </div>
 );
};

export default FeedContainer;
