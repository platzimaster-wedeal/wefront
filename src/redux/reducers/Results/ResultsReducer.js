import {
 GET_USER_PREDICT,
 GET_JOB_PREDICT,
} from "../../types/Results/ResultsTypes";

const INITIAL_STATE = {
 prediccionUser: "",
 prediccionJob: "",
};

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case GET_JOB_PREDICT:
   return { ...state, prediccionUser: { ...action.payload } };

  case GET_USER_PREDICT:
   return { ...state, prediccionJob: { ...action.payload } };

  default:
   return { ...state };
 }
};
