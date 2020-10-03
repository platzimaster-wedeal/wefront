import { GET_AUTH, DELETE_AUTH } from '../../Types/Auth/AuthTypes'

const INITIAL_STATE = {
  isAuth: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case GET_AUTH: 
      return {...state, isAuth: true}

    case DELETE_AUTH: 
      return {...state, isAuth: false}
    default:
      return {...state}
  }
}