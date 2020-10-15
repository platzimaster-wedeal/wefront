import { GET_AUTH, DELETE_AUTH } from "../../types/Auth/AuthTypes";

const INITIAL_STATE = {
 isAuth: false,
 id: null,
};

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case GET_AUTH:
   return { ...state, isAuth: true, id: action.payload };

  case DELETE_AUTH:
   return { ...state, isAuth: false, id: null };
  default:
   return { ...state };
 }
};
