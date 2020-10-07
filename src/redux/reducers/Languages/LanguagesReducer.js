import { GET_LANGUAGES } from '../../types/Languages/LanguagesTypes' 

const INITIAL_STATE = {
  languages: [],
  userLanguages: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LANGUAGES:
      return {...state, languages: [...action.payload]}
  
    default:
      return {...state}
  }
}
