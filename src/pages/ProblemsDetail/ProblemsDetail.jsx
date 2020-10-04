import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { useRequestGet } from '../../hooks/useRequestGet/useRequestGet'

// Services
import { getProblem } from '../../services/ProblemsService/problemsService'

// Redux
import {useSelector,useDispatch} from "react-redux"
import { GET_PROBLEM } from '../../redux/types/Problems/ProblemsTypes'

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

// Handle GET problem
const { id } = useParams()
const getProblemDispatch = useDispatch()
const [isLoading, setIsLoading] = useState(true)
const [isError, setIsError] = useState(null)
useEffect(() => {
  const handleGetProblem = async () => {
    try {
      const resp = await getProblem(id)
      getProblemDispatch({type: GET_PROBLEM, payload: resp.body})
      setIsLoading(false)
    } catch(err) {
      setIsError(err)
      setIsLoading(false)
      console.error(err)
    }
  }
  handleGetProblem()
}, [isLoading, isError])

 return (
  <HeaderContainer>
   <ChangeView
    SecondView={<ConnectionsCards />}
    firstViewTitle="About Problem"
    secondViewTitle="Connections">
    <FeedDetail title="About The Problem">
     <PostProblemDetail isWorker={employeer} problem={currentProblem} isLoading={isLoading} isError={isError}  />
    </FeedDetail>
   </ChangeView>
  </HeaderContainer>
 );
};

export default ProblemsDetail;
