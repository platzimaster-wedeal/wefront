import { combineReducers } from 'redux'

// Reducers
import AuthReducer from './Auth/AuthReducer'
import UserReducer from './User/UserReducer'
import ProfileReducer from './Auth/ProfileReducer'
import PostsReducer from './Posts/PostsReducer'
import SharesReducer from './Shares/SharesReducer'
import ProblemsReducer from './Problems/ProblemsReducer'

export default combineReducers({
  AuthReducer,
  UserReducer,
  ProfileReducer,
  PostsReducer,
  SharesReducer,
  ProblemsReducer
})
