import React, { useState, useEffect, useRef } from "react";

// Services
import { getProblems } from '../../services/ProblemsService/problemsService'

// Redux
import { useSelector, useDispatch } from "react-redux";
import { GET_PROBLEMS } from "../../redux/types/Problems/ProblemsTypes";
import { GET_POSTS } from "../../redux/types/Posts/PostTypes";

// Utils
import { useRequestGet } from '../../hooks/useRequestGet/useRequestGet'

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import ConnectionsCards from "../../components/ConnetionsCards/ConnectionsCards";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";
import CreatePostShare from "../../components/CreatePostShare/CreatePostShare";

// Containers
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import FeedContainer from "../../container/FeedContainer/FeedContainer";

const Home = () => {

  // Posts Redux State
  const { posts } = useSelector(state => state.PostsReducer)
  const profile = useSelector(state => state.ProfileReducer)

 // handle the modal of create share
 const [isModalShare, setIsModalShare] = useState(false);
 const actionShare = () => setIsModalShare(!isModalShare);

//  Handle GET of problems
const [isLoading, setIsLoading] = useState(true)
const [isError, setIsError] = useState(null)
const prevPage = useRef() 
const [pageOfGet, setPageOfGet] = useState(0)
const dispatchGetProblems = useDispatch()
const dispatchGetPosts = useDispatch()

useEffect( () => {
  const prevNumber = prevPage.current = pageOfGet 
  const getData = async () => {
      try {
        const resp = await getProblems()
        dispatchGetProblems({type: GET_PROBLEMS, payload: resp.body})
        dispatchGetPosts({type: GET_POSTS, payload: resp.body})
        setIsLoading(false)
      } catch(err){
        setIsLoading(false)
        console.log(err)
      }
  }
  if(posts.length > 0) {
    setIsLoading(false)
    return 
  } else {
    getData()
  }
}, [pageOfGet])

 return (
  <HeaderContainer>
   <ChangeView
      SecondView={<ConnectionsCards connections={profile.connections} isLoading={isLoading} isError={isError} />}
      firstViewTitle="Home"
      secondViewTitle="Connections"
   >
      <FeedContainer strategyAction={actionShare} type="share" data={posts} isLoading={isLoading} isError={isError} />
      {isModalShare && (
      <ModalContainer>
        <Modal title="Share Something!" onClose={actionShare}>
          <CreatePostShare 
            name={profile.first_name} 
            avatar={profile.avatar} 
            onCancel={actionShare} 
          />
        </Modal>
      </ModalContainer>
      )}
   </ChangeView>
  </HeaderContainer>
 );
};

export default Home;
