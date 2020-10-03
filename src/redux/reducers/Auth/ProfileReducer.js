import { GET_PROFILE, PATCH_PROFILE, SET_PROFILE } from '../../Types/Auth/ProfileTypes'

const INITIAL_STATE = {
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  avatar: '',
  phone: 0,
  type: 0,
  languages: [],
  latitude: 0,
  longitude: 0,
  connections: [],
  experience: [],
  skills: [],
  postulations: [],
  followers: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case GET_PROFILE:
      return {...action.payload}
      
    case PATCH_PROFILE:
      return {...state, ...action.payload }

    default:
      return {...state}
  }
}