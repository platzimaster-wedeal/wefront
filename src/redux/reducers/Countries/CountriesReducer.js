import {GET_COUNTRIES} from '../../types/Countries/CountriesTypes'

const INITIAL_STATE = {
  countries: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
        return {...state, countries: [...action.payload]}
  
    default:
      return {...state}
      break;
  }
}