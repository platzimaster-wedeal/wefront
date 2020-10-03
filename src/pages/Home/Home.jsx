import React, { useState, useEffect, useRef } from "react";

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
const url = 'https://wedeal.herokuapp.com/api/v1/problems'
const prevPage = useRef() 
const [pageOfGet, setPageOfGet] = useState(1)
const dispatchGetProblems = useDispatch()
const dispatchGetPosts = useDispatch()

useEffect( () => {
  const prevNumber = prevPage.current = pageOfGet 
  const getData = async () => {
    if(pageOfGet > prevNumber) {
      try {
        const resp = await useRequestGet(url)
        const data = await resp.json()
        dispatchGetProblems({type: GET_PROBLEMS, payload: data.body})
        dispatchGetPosts({type: GET_POSTS, payload: data.body})
      } catch(err){
        console.log(err, '----- Get Problems error ------')
      }
    }
  }
  getData()
  
}, [pageOfGet])

 return (
  <HeaderContainer>
   <ChangeView
      SecondView={<ConnectionsCards />}
      firstViewTitle="Home"
      secondViewTitle="Connections"
   >
      <FeedContainer strategyAction={actionShare} type="share" data={posts} />
      {isModalShare && (
      <ModalContainer>
        <Modal title="Share Something!" onClose={actionShare}>
          <CreatePostShare 
            username={profile.username} 
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
