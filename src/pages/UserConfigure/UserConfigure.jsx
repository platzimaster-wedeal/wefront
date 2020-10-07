import React, {useState, useEffect} from "react";

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { GET_PROFILE } from '../../redux/types/Auth/ProfileTypes'

// Services
import { patchProfile, getProfile, putProfile } from '../../services/AuthService/profileService'

// Layouts
import ChangeViewProfile from "../../layouts/ChangeViewProfile/ChangeViewProfile";

// Components
import FeedDetail from "../../components/FeedDetail/FeedDetail";
import ConnectionsCards from "../../components/ConnetionsCards/ConnectionsCards";
import ProfileConfigure from "../../components/ProfileConfigure/ProfileConfigure";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ModalContainer from "../../components/Modals/ModalContainer";
import ModalMessage from "../../components/ModalMessage/ModalMessage";
import Modal from "../../components/Modals/Modal";
import Loading from "../../components/Loading/Loading";

// Containers
import HeaderContainerProfile from "../../container/HeaderContainerProfile/HeaderContainerProfile";
import UserInformationContainer from "../../container/UserInformationContainer/UserInformationContainer";

const UserConfigure = () => {

// Redux state
  const { id } = useSelector(state => state.AuthReducer)
  const profile = useSelector(state => state.ProfileReducer)
  const { profilePosts } = useSelector(state => state.PostsReducer)

// ----------------- HANDLE PATCH PROFILE -----------------
  const getProfileDispatch = useDispatch()
  const [isLoadingPatch, setIsLoadingPatch] = useState(false)
  const [isErrorPatch, setIsErrorPatch] = useState(null)
  const onError = () => setIsErrorPatch(null)
  
  const [isPatched, setIsPatched] = useState(false)
  const onPatched = () => {
    setIsPatched(false)
    setIsLoadingPatch(false)
  }

  const [profileGeneralData, setProfileGeneralData] = useState({})
  const [profilePersonalData, setProfilePersonalData] = useState({})
  const [profileEmployeerData, setProfileEmployeerData] = useState({})

  const onPatch = async () => {
    try {
      setIsLoadingPatch(true)
      let data = {}
      data = {
        ...profile,
        ...profileGeneralData,
        ...profilePersonalData,
        ...profileEmployeerData
      }
      const resp_patch = await putProfile(id, data)
      const resp_get = await getProfile(id)
      getProfileDispatch({type: GET_PROFILE, payload: resp_get.body})
      setIsLoadingPatch(false)
      setIsPatched(true)
      setIsLoadingPatch(false)
    }catch(err) {
      setIsLoadingPatch(false)
      setIsErrorPatch(err)
      console.error(err)
    }

  }

  // ---------- Update data -----------
  useEffect(() => {
    const update = async () => {
      const resp_get = await getProfile(id)
      getProfileDispatch({type: GET_PROFILE, payload: resp_get.body})
    }
  }, [profile])

// ----------------- RENDER OF THE COMPONENT -----------------

 return (
  <HeaderContainerProfile>
   <ProfileHeader isUser isProfile user={profile}/>
   <ChangeViewProfile
    SecondView={
     <FeedDetail title="Configuration">
      <ProfileConfigure 
        isWorker={profile.employeer} 
        user={profile} 
        setGeneralInformation={setProfileGeneralData}
        setPersonalInformation={setProfilePersonalData} 
        setEmployeerInformation={setProfileEmployeerData}
        onSave={onPatch}
      />
     </FeedDetail>
    }
    firstViewTitle="General Information"
    secondViewTitle="Configure">
      <UserInformationContainer isProfile user={profile} />
      {/* Modals */}
      {isLoadingPatch && (
        <ModalContainer>
          <Modal title="Updating Data">
              <Loading />
              <span>Wait a moment while we validate the data</span>
          </Modal>
        </ModalContainer>
      )}
      {isErrorPatch && (
        <ModalContainer>
          <Modal title="Updating Data" onClose={onError}>
              <ModalMessage type="error" title="Oops!" message="We sorry, something went wrong, try later" onClose={onError} />
          </Modal>
        </ModalContainer>
      )}
      {isPatched && (
        <ModalContainer>
          <Modal title="Updating Data" onClose={onPatched}>
              <ModalMessage type="great" title="Awesome!" message="Great! Your data was updated" onClose={onPatched} />
          </Modal>
        </ModalContainer>
      )}
   </ChangeViewProfile>
  </HeaderContainerProfile>
 );
};

export default UserConfigure;
