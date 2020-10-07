import { INSERT_SHARE, GET_SHARES, GET_NEXT_SHARES } from '../../types/Shares/ShareTypes'

const INITIAL_STATE = {
  pageShares: 1, 
  shares: [],
  newShare: {
    title: '',
    description: '',
    myFile: null,
    favs: 0,
    comments: [],
    id_user: 0,
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      
    case INSERT_SHARE:
      return {...state, newShare: {...action.payload} }

    case GET_SHARES:
      return {...state, shares: action.payload }
      
    case GET_NEXT_SHARES:
      return {...state, pageShares: state.pageShares + 1 }
      
    default:
      return {...state}
  }
}