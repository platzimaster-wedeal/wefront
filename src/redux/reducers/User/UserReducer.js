import { GET_USER, PATCH_USER, FOLLOW_USER, UNFOLLOW_USER, INSERT_USER } from '../../Types/User/UserTypes'

const INITIAL_STATE = {
  username: '',
  name: '',
  email: '',
  profileImage: '',
  phone: 0,
  type: 0,
  languages: [],
  latitude: 0,
  longitude: 0,
  experience: [],
  skills: [],
  postulations: [],
  followers: 0,
  followed: false,
  problems: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case GET_USER:
      return {...state, ...action.payload }
      
    case INSERT_USER:
      return {...action.payload }

    case PATCH_USER:
      return {...state, ...action.payload }

    case FOLLOW_USER:
      return {...state, followed: true }

    case UNFOLLOW_USER:
      return {...state, followed: false}
  
    default:
      return {...state}
  }
}