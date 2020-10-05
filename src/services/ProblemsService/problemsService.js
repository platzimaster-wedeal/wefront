import { useRequestPostForm } from '../../hooks/useRequestPostForm/useRequestPostForm'
import { useRequestPost } from '../../hooks/useRequestPost/useRequestPost'
import { useRequestGet } from '../../hooks/useRequestGet/useRequestGet'

const URL_GET_PROBLEMS = 'https://wedeal.herokuapp.com/api/v1/problems'
const URL_GET_PROBLEM = id => `https://wedeal.herokuapp.com/api/v1/problems/${id}`
const URL_CREATE_PROBLEM = ''

export const getProblems = async () => {
  const data = await useRequestGet(URL_GET_PROBLEMS)
  const resp = await data.json()

  if(resp.error) {
    throw new Error(resp.body)
  }

  return resp
}

export const getProblem = async (id) => {
  const data = await useRequestGet(URL_GET_PROBLEM(id))
  const resp = await data.json()

  if(resp.error) {
    throw new Error(resp.body)
  }

  return resp
} 

export const createProblem = async (data) => {
  const resp_data = await useRequestPostForm(URL_CREATE_PROBLEM, data)
  const resp = await resp_data.json()

  if(resp.error) {
    throw new Error(resp.body)
  }

  return resp
} 

export const applyProblem = async (data) => {
    const resp_data = await useRequestPost(data)
    const resp = await resp_data.json()

    if(resp.error) {
      throw new Error(resp.body)
    }

    return resp
}
