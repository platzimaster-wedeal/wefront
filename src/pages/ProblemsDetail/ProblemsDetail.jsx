import React from "react";

// Redux
import {useSelector} from "react-redux"

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import FeedDetail from "../../components/FeedDetail/FeedDetail";
import ConnectionsCards from "../../components/ConnetionsCards/ConnectionsCards";
import PostProblemDetail from "../../components/PostProblemDetail/PostProblemDetail";

// Containers
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";

const ProblemsDetail = () => {

// Redux state
const { currentProblem } = useSelector(state => state.ProblemsReducer )
const { employeer } = useSelector(state => state.ProfileReducer )


 return (
  <HeaderContainer>
   <ChangeView
    SecondView={<ConnectionsCards />}
    firstViewTitle="About Problem"
    secondViewTitle="Connections">
    <FeedDetail title="About The Problem">
     <PostProblemDetail isWorker={employeer} problem={currentProblem} />
    </FeedDetail>
   </ChangeView>
  </HeaderContainer>
 );
};

export default ProblemsDetail;
