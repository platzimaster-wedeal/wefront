import { GET_PROBLEMS, GET_PROBLEM, INSERT_PROBLEM, PATCH_PROBLEM } from '../../Types/Problems/ProblemsTypes'

const INITIAL_STATE = {
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
    postulations: [],
    user: {},
  },
  newProblem: {
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
    id_user: 0,
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case GET_PROBLEMS:
      return {...state, problems: [...action.payload] }

    case GET_PROBLEM:
      return {...state, currentProblem: action.payload }
      
    case INSERT_PROBLEM:
      return {...state, newProblem: {...action.payload} }

    case PATCH_PROBLEM:
      return {...state, newProblem: {...action.payload} }

      
    default:
      return {...state}
  }
}