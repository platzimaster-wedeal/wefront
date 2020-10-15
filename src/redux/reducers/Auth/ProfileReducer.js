import {
 GET_PROFILE,
 PATCH_PROFILE,
 GET_LOCATION,
 SET_PREFERENCE_PROFILE,
 SET_CONNECTIONS,
} from "../../types/Auth/ProfileTypes";

const INITIAL_STATE = {
 username: "",
 first_name: "",
 last_name: "",
 email: "",
 avatar: "",
 phone: 0,
 type: 0,
 country: "",
 languages: [],
 location: {},
 connections: [],
 experience: [],
 employeer: null,
 employee: null,
 skills: [],
 postulations: [],
 followers: 0,
 problems: [],
};

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case GET_PROFILE:
   return { ...state, ...action.payload };

  case PATCH_PROFILE:
   return { ...state, ...action.payload };

  case GET_LOCATION:
   return { ...state, location: { ...action.payload } };

  case SET_PREFERENCE_PROFILE:
   return { ...state, employeer: action.payload };

  case SET_CONNECTIONS:
   return { ...state, connections: action.payload };

  default:
   return { ...state };
 }
};
