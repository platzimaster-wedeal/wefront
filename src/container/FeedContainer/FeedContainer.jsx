import React from "react";
import { useSelector } from 'react-redux'

// Utils
import { defineTypeStrategy } from "../../utils/defineTypeStrategy";

// Components
import StrategyCard from "../../components/StrategyCard/StrageyCard";
import FeedGeneral from "../../components/FeedGeneral/FeedGeneral";

const FeedContainer = ({ strategyAction, type, data, isLoading, isError = null }) => {

const { avatar } = useSelector(state => state.ProfileReducer)

 const strategy = defineTypeStrategy(type);
 return (
  <div>
   <StrategyCard
    title={strategy.title}
    imgSource={avatar}
    icon={strategy.icon}
    placeholder={strategy.placeholder}
    onClick={strategyAction}
   />
   <FeedGeneral data={data} isLoading={isLoading} isError={isError} />
  </div>
 );
};

export default FeedContainer;
