import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

// Reux
import { useSelector, useDispatch } from 'react-redux'
import { GET_USER } from '../../redux/types/User/UserTypes' 
import { GET_PROFILE_DEALS } from '../../redux/types/Problems/ProblemsTypes'


// Services
import { getUser } from '../../services/UserService/userService'
import { getUserFollowers } from '../../services/UserService/userService'
import { createProblem, getProblemUser } from "../../services/ProblemsService/problemsService"



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
  const [isProfile, setIsProfile] = useState(false) 
  const { idUser } = useParams()
  const { id } = useSelector(state => state.AuthReducer)
  const profile = useSelector(state => state.ProfileReducer)
  const user = useSelector(state => state.UserReducer)
  const { profilePosts } = useSelector(state => state.PostsReducer)

  // ------------------------ Handle validation of user ----------------------
  // ---------------- Effect of profile ----------------
  useEffect(() => {
    if(!idUser || Number(idUser) === id) {
      setIsProfile(true)
      return
    }

  }, [profile, isProfile, idUser])

// Get deals
const setProfileDeals = useDispatch()

  useEffect(() => {
    const getProblems = async (id_user) => {
      try {
        setIsLoadingUser(true)
        console.log(id_user)
        const resp_deals = await getProblemUser(id_user)
        setProfileDeals({type: GET_PROFILE_DEALS, payload: resp_deals.body })
        setIsLoadingUser(false)
      }catch(err) {
        setIsLoadingUser(false)
        setIsError(err)
        throw new Error(err)
      }
    }
    if(isProfile === true) {
      getProblems(id)
    } else if(isProfile === false && idUser){
      getProblems(idUser)
    }

  }, [isProfile])

  // ---------------- Effect of user ---------------- 
  const getUserDispatch = useDispatch()
  const [isLoadingUser, setIsLoadingUser] = useState(false)
  const [isError, setIsError] = useState(null)
  useEffect(() => {
    if(Number(idUser)) {
      setIsProfile(false)
    }
    const getUserData = async () => {
      try {
        setIsLoadingUser(true)
        const { body } = await getUser(idUser)
        const respFollowers = await getUserFollowers(idUser)
        const userData = {
          ...body,
          followers: respFollowers.body[0].total_followers
        }
        getUserDispatch({type: GET_USER, payload: {...userData}})
        setIsLoadingUser(false)
      } catch(err) {
        setIsError(err)
        setIsLoadingUser(false)
        console.error(err)
      }
    } 
    getUserData()

  }, [idUser])

 // Handle modal share
 const [isModalShare, setIsModalShare] = useState(false);
 const [shareData, setShareData] = useState({})
 const actionShare = () => setIsModalShare(!isModalShare);

 return (
  <HeaderContainerProfile>
   <ProfileHeader isUser={isProfile} user={isProfile ? profile : user} />
   <ChangeViewProfile
    SecondView={isLoadingUser ? <Loading /> : <FeedContainer strategyAction={actionShare} type="share" data={profilePosts} />}
    firstViewTitle="Posts"
    secondViewTitle="Information">
    <UserInformationContainer isProfile={isProfile} user={isProfile ? profile : user} />
    {isModalShare && (
     <ModalContainer>
      <Modal title="Share Something!" onClose={actionShare}>
       <CreatePostShare 
        name={profile.first_name} 
        avatar={profile.avatar} 
        onCancel={actionShare} 
        setInformation={setShareData}
       />
      </Modal>
     </ModalContainer>
    )}
   </ChangeViewProfile>
  </HeaderContainerProfile>
 );
};

export default UserProfile;
