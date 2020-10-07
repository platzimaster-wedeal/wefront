import {
 GET_USER,
 PATCH_USER,
 FOLLOW_USER,
 UNFOLLOW_USER,
 INSERT_USER,
} from "../../types/User/UserTypes";

const INITIAL_STATE = {
 username: "",
 first_name: "",
 last_name: "",
 myAvatar: null,
 email: "",
 telephone: 0,
 employeer: 0,
 languages: [],
 latitude: 0,
 longitude: 0,
 experience: [],
 skills: [],
 postulations: [],
 followers: 0,
 followed: false,
 problems: [],
};

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case GET_USER:
   return { ...state, ...action.payload };

  case INSERT_USER:
   return { ...action.payload };

  case PATCH_USER:
   return { ...state, ...action.payload };

  case FOLLOW_USER:
   return { ...state, followed: true, followers: state.followers + 1 };

  case UNFOLLOW_USER:
   return { ...state, followed: false, followers: state.followers - 1 };

  default:
   return { ...state };
 }
};
