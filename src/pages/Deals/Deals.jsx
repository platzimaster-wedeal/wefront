import React from "react";

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import DealsComponent from "../../components/Deals/Deals";

// Containers
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import FeedContainer from "../../container/FeedContainer/FeedContainer";

const Deals = () => {
 return (
  <HeaderContainer>
   <ChangeView SecondView={<DealsComponent deals={[1, 2, 3]} />}>
    <FeedContainer />
   </ChangeView>
  </HeaderContainer>
 );
};

export default Deals;
