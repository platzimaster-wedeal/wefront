import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Reux
import { useSelector, useDispatch } from "react-redux";
import { GET_USER } from "../../redux/types/User/UserTypes";
import { GET_PROFILE_DEALS, GET_USER_DEALS } from "../../redux/types/Problems/ProblemsTypes";

// Services
import { getUser } from "../../services/UserService/userService";
import { getUserFollowers } from "../../services/UserService/userService";
import {
 createProblem,
 getProblemUser,
} from "../../services/ProblemsService/problemsService";
import { createPost } from "../../services/PostsServices/postsServices";

// Layouts
import ChangeViewProfile from "../../layouts/ChangeViewProfile/ChangeViewProfile";

// Components
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";
import ModalMessage from "../../components/ModalMessage/ModalMessage";
import Loading from "../../components/Loading/Loading";
import CreatePostShare from "../../components/CreatePostShare/CreatePostShare";

// Containers
import HeaderContainerProfile from "../../container/HeaderContainerProfile/HeaderContainerProfile";
import FeedContainer from "../../container/FeedContainer/FeedContainer";
import UserInformationContainer from "../../container/UserInformationContainer/UserInformationContainer";

const UserProfile = () => {
 // Redux state
 const [isProfile, setIsProfile] = useState(false);
 const { idUser } = useParams();
 const { id } = useSelector((state) => state.AuthReducer);
 const profile = useSelector((state) => state.ProfileReducer);
 const user = useSelector((state) => state.UserReducer);
 const { profileDeals, userDeals } = useSelector((state) => state.ProblemsReducer);

 // ------------------------ Handle validation of user ----------------------
 // ---------------- Effect of profile ----------------
 useEffect(() => {
  if (!idUser) {
   setIsProfile(true);
  }

  if(Number(idUser) === id) {
    setIsProfile(true)
  }
 }, [profile, isProfile, idUser]);

 // Get deals
 const setProfileDeals = useDispatch();
const [isFetchedDeals, setIsFetchedDeals] = useState(false)
 useEffect(() => {
  const getProblems = async (id_user) => {
   try {
    setIsLoadingUser(true);
    const resp_deals = await getProblemUser(id_user);
    setIsFetchedDeals(true)
    if(isProfile){
      setProfileDeals({ type: GET_PROFILE_DEALS, payload: resp_deals.body });
    } else {
      setProfileDeals({type: GET_USER_DEALS, payload: resp_deals.body})
    }
    setIsLoadingUser(false);
   } catch (err) {
    setIsLoadingUser(false);
    setIsError(err);
   }
  };

  if(profileDeals.length === 0 && !isFetchedDeals) {
    if (isProfile === true) {
      getProblems(id);
    } else if (isProfile === false && idUser) {
      getProblems(idUser);
    }
  }
 }, [isProfile, profileDeals, id]);

 // ---------------- Effect of user ----------------
 const getUserDispatch = useDispatch();
 const [isLoadingUser, setIsLoadingUser] = useState(false);
 const [isError, setIsError] = useState(null);
 useEffect(() => {
  if (idUser && Number(idUser) !== id) {
   setIsProfile(false);
  }
  const getUserData = async () => {
   try {
    setIsLoadingUser(true);
    const { body } = await getUser(idUser);
    const respFollowers = await getUserFollowers(idUser);
    const userData = {
     ...body,
     followers: respFollowers.body[0].total_followers,
    };
    getUserDispatch({ type: GET_USER, payload: { ...userData } });
    setIsLoadingUser(false);
   } catch (err) {
    setIsError(err);
    setIsLoadingUser(false);
    console.error(err);
   }
  };
  if(idUser && !isProfile){
    getUserData();
  }
 }, [idUser, isProfile]);


 // ---------------- Handle create Share ----------------
 const [isModalShare, setIsModalShare] = useState(false);
 const [isLoadingShare, setIsLoadingShare] = useState(false);
 const [shareData, setShareData] = useState({});
 const actionShare = () => setIsModalShare(!isModalShare);
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
   console.log(shareData)
   const resp = await createPost(shareData);
   setIsShareCreated(true);
   setIsLoadingShare(false);
  } catch (err) {
   setIsLoadingShare(false);
   setIsErrorShare(err);
   console.error(err);
  }
 };


 // ---------------- Render of the component ----------------
 return (
  <HeaderContainerProfile>
   <ProfileHeader isUser={isProfile} user={isProfile ? profile : user} />
   <ChangeViewProfile
    SecondView={
     isLoadingUser ? (
      <Loading />
     ) : (
      <FeedContainer
       strategyAction={actionShare}
       type="share"
       data={isProfile ? profileDeals : userDeals}
      />
     )
    }
    firstViewTitle="Information"
    secondViewTitle="Posts">
    <UserInformationContainer
     isProfile={isProfile}
     user={isProfile ? profile : user}
     problems={isProfile ? profileDeals : userDeals}
    />
    {isModalShare && (
     <ModalContainer>
      <Modal title="Share Something!" onClose={actionShare}>
       <CreatePostShare
        name={profile.first_name}
        idUser={id}
        avatar={profile.avatar}
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
   </ChangeViewProfile>
  </HeaderContainerProfile>
 );
};

export default UserProfile;
