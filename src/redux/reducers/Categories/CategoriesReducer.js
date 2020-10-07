import { GET_CATEGORIES } from "../../types/Categories/CategoriesTypes";

const INITIAL_STATE = {
 categories: [],
};

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case GET_CATEGORIES:
   return { ...state, categories: [...action.payload] };
   break;

  default:
   return { ...state };
   break;
 }
};
