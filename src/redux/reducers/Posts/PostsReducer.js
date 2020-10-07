import { GET_POSTS, GET_USER_POSTS, GET_PROFILE_POSTS } from '../../types/Posts/PostTypes'

const INITIAL_STATE = {
  posts: [],
  userPosts: [],
  profilePosts: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      
    case GET_POSTS:
      return {...state, posts: [...action.payload ]}

    case GET_USER_POSTS:
      return {...state, userPosts: action.payload }

    case GET_PROFILE_POSTS:
      return {...state, profilePosts: action.payload }
      
    default:
      return {...state}
  }
}