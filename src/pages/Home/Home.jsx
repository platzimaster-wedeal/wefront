import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

// Hooks
import { useSelector, useDispatch } from "react-redux";

// Services
import { getProblems } from "../../services/ProblemsService/problemsService";
import {
 getPosts,
 createPost,
} from "../../services/PostsServices/postsServices";
import { getConnections } from "../../services/AuthService/profileService";

// Redux
import { GET_PROBLEMS } from "../../redux/types/Problems/ProblemsTypes";
import { GET_POSTS } from "../../redux/types/Posts/PostTypes";
import { GET_SHARES } from "../../redux/types/Shares/ShareTypes";
import { SET_CONNECTIONS } from "../../redux/types/Auth/ProfileTypes";

import { GET_LOCATION } from "../../redux/types/Auth/ProfileTypes";

// Utils
import { useRequestGet } from "../../hooks/useRequestGet/useRequestGet";

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
 const history = useHistory();

 // ---------------- Redux State ----------------
 const { id } = useSelector((state) => state.AuthReducer);
 const { posts } = useSelector((state) => state.PostsReducer);
 const { newShare } = useSelector((state) => state.SharesReducer);
 const { problems } = useSelector((state) => state.ProblemsReducer);
 const profile = useSelector((state) => state.ProfileReducer);

 // ---------------- Handle GET of problems
 const [isLoading, setIsLoading] = useState(true);
 const [isError, setIsError] = useState(null);
 const prevPage = useRef();
 const [pageOfGet, setPageOfGet] = useState(0);
 const dispatch = useDispatch();

 useEffect(() => {
  // ---------------- Defining next request
  const prevNumber = (prevPage.current = pageOfGet);
  const getData = async () => {
   try {
    const resp_problems = await getProblems();
    const resp_shares = await getPosts();
    const resp_cooncts = await getConnections(id);
    dispatch({ type: GET_PROBLEMS, payload: [...resp_problems.body] });
    dispatch({ type: GET_SHARES, payload: [...resp_shares.body] });
    dispatch({
     type: GET_POSTS,
     payload: [...resp_shares.body, ...resp_problems.body],
    });
    dispatch({ type: SET_CONNECTIONS, payload: resp_cooncts.body });
    // dispatchSetPosts({type: GET_POSTS, payload: []})
    setIsLoading(false);
   } catch (err) {
    setIsLoading(false);
    console.error(err);
   }
  };

  if (!posts.length > 0) {
   getData();
  } else {
   setIsLoading(false);
  }
 }, [pageOfGet]);

 // ---------------- Handle create share
 const [isModalShare, setIsModalShare] = useState(false);
 const actionShare = () => setIsModalShare(!isModalShare);

 const [isLoadingShare, setIsLoadingShare] = useState(false);
 const [shareData, setShareData] = useState({});

 const [isErrorShare, setIsErrorShare] = useState(null);
 const onErrorShare = () => {
  setIsErrorShare(null);
  setIsModalShare(false);
 };

 const [isShareCreated, setIsShareCreated] = useState(false);
 const onCreatedShare = () => {
  setIsShareCreated(false);
  setIsModalShare(false);
 };

 const onNewShare = async () => {
  try {
   setIsLoadingShare(true);
   await setShareData((prev) => {
    return { ...prev, publication_date: new Date().toString() };
   });
   const resp = await createPost(shareData);
   setIsShareCreated(true);
   setIsLoadingShare(false);
  } catch (err) {
   setIsLoadingShare(false);
   setIsErrorShare(err);
   console.error(err);
  }
 };

 // ----------------- RENDER OF THE COMPONENT -----------------
 return (
  <HeaderContainer>
   <ChangeView
    SecondView={
     <ConnectionsCards
      connections={profile.connections}
      isLoading={isLoading}
      isError={isError}
     />
    }
    firstViewTitle="Home"
    secondViewTitle="Connections">
    <FeedContainer
     strategyAction={actionShare}
     type="share"
     data={posts}
     isLoading={isLoading}
     isError={isError}
    />
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
      <Modal title="Awesome" onClose={onCreatedShare}>
       <ModalMessage
        type="great"
        message="Your post was shared!"
        onClose={onCreatedShare}
       />
      </Modal>
     </ModalContainer>
    )}
    {isErrorShare && (
     <ModalContainer>
      <Modal title="Oops!" onClose={onErrorShare}>
       <ModalMessage
        type="error"
        message="Sorry something went wrong!"
        onClose={onErrorShare}
       />
      </Modal>
     </ModalContainer>
    )}
   </ChangeView>
  </HeaderContainer>
 );
};

export default Home;
