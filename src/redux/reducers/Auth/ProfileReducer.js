import { GET_PROFILE, PATCH_PROFILE, GET_LOCATION } from '../../Types/Auth/ProfileTypes'

const INITIAL_STATE = {
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  avatar: '',
  phone: 0,
  type: 0,
  languages: [],
  location: {},
  connections: [],
  experience: [],
  employeer: [],
  employee: [],
  skills: [],
  postulations: [],
  followers: 0,
  problems: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case GET_PROFILE:
      return {...state, ...action.payload}
      
    case PATCH_PROFILE:
      return {...state, ...action.payload }

    case GET_LOCATION:
      return {...state, location: {...action.payload} }

    default:
      return {...state}
  }
}