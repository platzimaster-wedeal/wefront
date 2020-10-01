import React from "react";

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import ConnectionsCards from "../../components/ConnetionsCards/ConnectionsCards";

// Containers
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import FeedContainer from "../../container/FeedContainer/FeedContainer";

const Home = () => {
 return (
  <HeaderContainer>
   <ChangeView SecondView={<ConnectionsCards />}>
    <FeedContainer />
   </ChangeView>
  </HeaderContainer>
 );
};

export default Home;
