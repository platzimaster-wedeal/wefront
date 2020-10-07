import React, { useState } from "react";
import { useParams } from 'react-router-dom'


// Redux 
import { useSelector, useDispatch } from 'react-redux'
import { FOLLOW_USER, UNFOLLOW_USER } from '../../redux/types/User/UserTypes' 


import { useHistory } from "react-router-dom";
import Button from "../Buttons/Button";

// Services
import { postFollowUser, postUnfollowUser } from '../../services/UserService/userService'


const ProfileHeaderActions = ({
 isProfile = false,
 onRecommend,
 onEdit,
 userId
}) => {
 const history = useHistory();
 const { idUser } = useParams()


 const followDispatch = useDispatch()
 const [isLoadingFollow, setIsLoadingFollow] = useState(false)
 const { id } = useSelector(state => state.AuthReducer)
 const { followed } = useSelector(state => state.UserReducer)

//  Follow user
 const onFollow = async () => {
   try {
     setIsLoadingFollow(true)
     const resp = await postFollowUser(id, idUser)
     followDispatch({type: FOLLOW_USER})
     setIsLoadingFollow(false)
   } catch(err) {
      console.error(err)
   }
 }

//  Unfollow user
 const unFollow = async () => {
  try {
    setIsLoadingFollow(true)
    const resp = await postUnfollowUser(id, idUser)
    followDispatch({type: UNFOLLOW_USER})
    setIsLoadingFollow(false)
  } catch(err) {
     console.error(err)
  }
 }

 const goToEdit = () => history.push("/user/configuration");

 return (
  <>
   {!isProfile ? isLoadingFollow ? 'Loading...' : followed ? (
    <Button onClick={unFollow}> Followed </Button>
   ) : (
    <div className="profile-header__actions">
     <Button onClick={onFollow} active>
      Follow
     </Button>
    </div>
   ) : (
    <div className="profile-header__actions">
     <Button active onClick={goToEdit}>
      {" "}
      Edit{" "}
     </Button>{" "}
    </div>
   )}
  </>
 );
};

export default ProfileHeaderActions;
