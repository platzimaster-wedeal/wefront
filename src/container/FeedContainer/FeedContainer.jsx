import React from "react";
import PhotoUser from "../../assets/static/img/users/user.jpg";
import { MdAdd } from "react-icons/md";

// Components
import StrategyCard from "../../components/StrategyCard/StrageyCard";
import FeedGeneral from "../../components/FeedGeneral/FeedGeneral";

const FeedContainer = () => {
 return (
  <div>
   <StrategyCard
    title={"Do you want share something, Alan?"}
    imgSource={PhotoUser}
    icon={MdAdd}
    placeholder={"What are you thinking?"}
   />
   <FeedGeneral />
  </div>
 );
};

export default FeedContainer;
