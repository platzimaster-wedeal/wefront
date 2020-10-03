import React from "react";

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import FeedDetail from "../../components/FeedDetail/FeedDetail";
import ConnectionsCards from "../../components/ConnetionsCards/ConnectionsCards";
import PostProblemDetail from "../../components/PostProblemDetail/PostProblemDetail";

// Containers
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";

const ProblemsDetail = () => {
 return (
  <HeaderContainer>
   <ChangeView
    SecondView={<ConnectionsCards />}
    firstViewTitle="About Problem"
    secondViewTitle="Connections">
    <FeedDetail title="About The Problem">
     <PostProblemDetail isWorker={false} />
    </FeedDetail>
   </ChangeView>
  </HeaderContainer>
 );
};

export default ProblemsDetail;
