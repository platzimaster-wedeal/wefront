import { GET_PROBLEMS, GET_PROBLEM, INSERT_PROBLEM, PATCH_PROBLEM, GET_NEXT_PROBLEMS, APPLY_PROBLEM, GET_PROFILE_DEALS } from '../../types/Problems/ProblemsTypes'

const INITIAL_STATE = {
  pageProblems: 1,
  problems: [],
  currentProblem: {
    id: null,
    id_search: '',
    title: '',
    employeer_name: '',
    short_description: '',
    long_description: '',
    file: null,
    schedule: '',
    categories: [],
    modality: 0,
    requirements: [],
    salary_range1: 0,
    salary_range2: 0,
    state: 0,
    currentPrice: 0,
    postulations: [],
    state: 1,
    user: {},
  },
  newProblem: {
    title: '',
    employeer_name: '',
    short_description: '',
    long_description: '',
    myFile: null,
    schedule: '',
    categories: [],
    modality: 0,
    requirements: [],
    status: "availble",
    price: 0,
    id_user: 0,
  },
  applyProblem: {
    id_employee: null,
    status: "solving",
    id_employer_job_offer: null
  },
  profileDeals: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case GET_PROBLEMS:
      return {...state, problems: [...action.payload] }

    case GET_PROBLEM:
      return {...state, currentProblem: {...action.payload} }
      
    case INSERT_PROBLEM:
      return {...state, newProblem: action.payload }

    case PATCH_PROBLEM:
      return {...state, newProblem: {...action.payload} }

    case GET_NEXT_PROBLEMS:
      return {...state, pageProblems: state.pageProblems + 1  }

    case APPLY_PROBLEM:
      return {...state, applyProblem: {...action.payload}  }

    case GET_PROFILE_DEALS:
      return {...state, profileProblems: {...action.payload}  }

      
    default:
      return {...state}
  }
}