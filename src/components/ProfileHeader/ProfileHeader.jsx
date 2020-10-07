import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { GET_PROFILE } from '../../redux/types/Auth/ProfileTypes'

// Hooks
import { useInputFile } from '../../hooks/useInputFile/useInputFile'

// Services
import { patchProfile, getProfile } from '../../services/AuthService/profileService'

// Styles
import "../../assets/styles/components/ProfileHeader/ProfileHeader.scss";

// Components
import ProfileHeaderPhoto from "../ProfileHeaderPhoto/ProfileHeaderPhoto";
import ProfileHeaderAction from "../ProfileHeaderActions/ProfileHeaderActions";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";
import ModalMessage from "../../components/ModalMessage/ModalMessage";
import ModalAddImage from "../../components/ModalAddImage/ModalAddImage";
import Loading from "../../components/Loading/Loading";

const ProfileHeader = ({ user, isUser = false }) => {

  const { id } = useSelector(state => state.AuthReducer)

 // ---------------- Handle Change images ----------------
 const [isModalChangeImg, setIsModalChangeImg] = useState(false);
 const handleModal = () => setIsModalChangeImg(!isModalChangeImg);
 const [pictureName, setPicture, pictureFile] = useInputFile()

 const dispatchGetProfile = useDispatch()
 const [isLoadingPatchImg, setIsLoadingPatchImg] = useState(false)
 const [isErrorPatchImg, setIsErrorPatchImg] = useState(false)
 const onError = () => {
   setIsErrorPatchImg(null)
   setIsModalChangeImg(false)
 }

 const [isPatched, setIsPatched] = useState(false)
 const onPatched = () => {
   setIsPatched(false)
   setIsModalChangeImg(false)
 }

 const onChange = async () => {
   try {
     setIsLoadingPatchImg(true)
     const resp = await patchProfile(id, {...user, myAvatar: pictureFile})
     const resp_user = await getProfile(id)
     dispatchGetProfile({type: GET_PROFILE, payload: resp_user})
     setIsModalChangeImg(false)
     setIsPatched(true)
    } catch(err) {
      setIsErrorPatchImg(err)
      setIsModalChangeImg(false)
      setIsLoadingPatchImg(false)
      console.error(err)
    }
 }

 return (
  <section className="profile-header">
    <ProfileHeaderPhoto 
      name={user && user.first_name}
      avatar={user && user.avatar}
      isProfile={isUser} 
      onPhoto={handleModal} 
    />
   <small className="profile-header__description">
    {user && user.description}
   </small>
   <strong className="profile-header__profession">
    {user && user.profession}
   </strong>

   <div className="profile-header__actions">
    <ProfileHeaderAction isProfile={isUser} userId={user.id_user}/>
   </div>
    {!isLoadingPatchImg && isModalChangeImg && (
      <ModalContainer>
      <Modal title="Change Image" onClose={handleModal}>
        <ModalAddImage 
          title="Select a new image"
          state={pictureName}
          setState={setPicture}
          onClick={onChange}
        />
      </Modal>
      </ModalContainer>
    )}
    {isLoadingPatchImg && (
      <ModalContainer>
        <Modal title="Changing Image">
          <Loading />
          <span>Wait a moment while we validate your data.</span>
        </Modal>
      </ModalContainer>
    )}
    {isErrorPatchImg && (
      <ModalContainer>
        <Modal title="Change Image" onClose={onError}>
          <ModalMessage type="error" message="We sorry, something went wrong, try later" onClose={onError}/>
        </Modal>
      </ModalContainer>
    )}
    {isPatched && (
      <ModalContainer>
        <Modal title="Changing Image" onClose={onPatched}>
          <ModalMessage type="great" message="Awesome, your image was changed it" onClose={onPatched} />
        </Modal>
      </ModalContainer>
    )}
  </section>
 );
};

export default ProfileHeader;
