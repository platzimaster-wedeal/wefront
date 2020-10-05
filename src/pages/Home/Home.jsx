import React, { useState, useEffect, useRef } from "react";
import { useHistory } from 'react-router-dom'

// Hooks
import { useGetLocation } from '../../hooks/useGetLocation/useGetLocation'


// Services
import { getProblems } from '../../services/ProblemsService/problemsService'
import { getPosts, createPost } from '../../services/PostsServices/postsServices'

// Redux
import { useSelector, useDispatch } from "react-redux";
import { GET_PROBLEMS } from "../../redux/types/Problems/ProblemsTypes";
import { GET_POSTS } from "../../redux/types/Posts/PostTypes";
import { GET_SHARES } from "../../redux/types/Shares/ShareTypes";
import { INSERT_SHARE } from "../../redux/types/Shares/ShareTypes";
import { GET_LOCATION } from "../../redux/types/Auth/ProfileTypes";

// Utils
import { useRequestGet } from '../../hooks/useRequestGet/useRequestGet'

// Layouts
import ChangeView from "../../layouts/ChangeView/ChangeView";

// Components
import ConnectionsCards from "../../components/ConnetionsCards/ConnectionsCards";
import ModalContainer from "../../components/Modals/ModalContainer";
import ModalMessage from "../../components/ModalMessage/ModalMessage";
import Modal from "../../components/Modals/Modal";
import CreatePostShare from "../../components/CreatePostShare/CreatePostShare";
import Loading from "../../components/Loading/Loading";

// Containers
import HeaderContainer from "../../container/HeaderContainer/HeaderContainer";
import FeedContainer from "../../container/FeedContainer/FeedContainer";

const Home = () => {
  const history = useHistory()

  // Handle get Location
  const getLocationDispatch = useDispatch()
  // const [location, locationError, locationLaoding] = useGetLocation()

  // Posts Redux State
  const { id } = useSelector(state => state.AuthReducer)
  const { posts } = useSelector(state => state.PostsReducer)
  const { newShare } = useSelector(state => state.SharesReducer)
  const profile = useSelector(state => state.ProfileReducer)

 // ---------------- handle the modal of create share
 const [isModalShare, setIsModalShare] = useState(false);
 const actionShare = () => setIsModalShare(!isModalShare);

// ---------------- Handle GET of problems
const [isLoading, setIsLoading] = useState(true)
const [isError, setIsError] = useState(null)
const prevPage = useRef() 
const [pageOfGet, setPageOfGet] = useState(0)
const dispatchGetProblems = useDispatch()
const dispatchGetShares = useDispatch()
const dispatchSetPosts = useDispatch()

useEffect( () => {
  // Get location
  // const { latitude, longitude } = location
  // getLocationDispatch({type: GET_LOCATION, payload: {latitude, longitude}})
  // console.log(profile.location, 'THIS IS A TEST FOR HOME')

// Defining next request
  const prevNumber = prevPage.current = pageOfGet 
  const getData = async () => {
      try {
        const resp_problems = await getProblems()
        const resp_shares = await getPosts()
        dispatchGetProblems({type: GET_PROBLEMS, payload: [...resp_problems.body]})
        dispatchGetShares({type: GET_SHARES, payload: [...resp_shares.body]})
        dispatchSetPosts({type: GET_POSTS, payload: [...resp_shares.body, ...resp_problems.body]})
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


// ---------------- Handle create share
const newShareDispatch = useDispatch()
const [isLoadingShare, setIsLoadingShare] = useState(false)
const [shareData, setShareData] = useState({})

const [isErrorShare, setIsErrorShare] = useState(null)
const onErrorShare = () => {
  setIsErrorShare(null)
  setIsModalShare(false)
}

const [isShareCreated, setIsShareCreated] = useState(false)
const onCreatedShare = () => setIsShareCreated(false)

const onNewShare = async () => {
  try {
    setIsLoadingShare(true)
    await setShareData((prev) => {
      return {...prev, publication_date: new Date().toString()}
    })
    newShareDispatch({type: INSERT_SHARE, payload: {...shareData}})
    const resp = await createPost(newShare)
    setIsShareCreated(true)
  } catch(err) {
    setIsLoadingShare(false)
    setIsErrorShare(err)
    console.error(err)
  }

}

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
              idUser={id}
              onCancel={actionShare} 
              onCreate={onNewShare}
              setInformation={setShareData}
            />
          </Modal>
        </ModalContainer>
        )}
        {isLoadingShare && (
        <ModalContainer>
          <Modal title="Share Something!" onClose={actionShare}>
            <>
              <Loading />
              <span>Wait a moment while we validate the data :D</span>
            </>
          </Modal>
        </ModalContainer>
        )}
        {isShareCreated && (
        <ModalContainer>
          <Modal title="Awesome">
            <ModalMessage type="great" message="Your post was shared!" onClose={onCreatedShare} />
          </Modal>
        </ModalContainer>
        )}
        {isErrorShare && (
        <ModalContainer>
          <Modal title="Oops!">
            <ModalMessage type="error" message="Sorry something went wrong!" onClose={onErrorShare} />
          </Modal>
        </ModalContainer>
        )}
   </ChangeView>
  </HeaderContainer>
 );
};

export default Home;
