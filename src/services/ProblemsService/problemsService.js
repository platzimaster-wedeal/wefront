import { useRequestPostForm } from '../../hooks/useRequestPostForm/useRequestPostForm'
import { useRequestPost } from '../../hooks/useRequestPost/useRequestPost'
import { useRequestGet, useRequestGetToken } from '../../hooks/useRequestGet/useRequestGet'

const URL_GET_PROBLEMS = 'https://wedeal.herokuapp.com/api/v1/problems'
const URL_GET_PROBLEM = id => `https://wedeal.herokuapp.com/api/v1/problems/${id}`
const URL_GET_USER_PROBLEMS = id => `https://wedeal.herokuapp.com/api/v1/users/problems/${id}/getProblems`
const URL_CREATE_PROBLEM = 'https://wedeal.herokuapp.com/api/v1/problems'
const URL_APPLY = 'https://wedeal.herokuapp.com/api/v1/applyProblem'
const URL_GET_JOB_OFFER = id => `https://wedeal.herokuapp.com/api/v1/applyProblem/${id}`
const URL_GET_WORKERS_OFFER = id => `https://wedeal.herokuapp.com/api/v1/users/problems/${id}/getProblems`

export const getProblems = async () => {
  const data = await useRequestGetToken(URL_GET_PROBLEMS)
  const resp = await data.json()

  if(resp.error) {
    throw new Error(resp.body)
  }

  return resp
}

export const getProblem = async (id) => {
  const data = await useRequestGetToken(URL_GET_PROBLEM(id))
  const resp = await data.json()

  if(resp.error) {
    throw new Error(resp.body)
  }

  return resp
} 

export const getProblemUser = async (id) => {
  const data = await useRequestGetToken(URL_GET_USER_PROBLEMS(id))
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

export const applyToProblem = async (data) => {
    const resp_data = await useRequestPost(URL_APPLY, data)
    const resp = await resp_data.json()

    if(resp.error) {
      throw new Error("Something went wrong with the apply to problem")
    }

    return resp
}

export const getJobOffer = async (id) => {
    const resp_data = await useRequestGetToken(URL_GET_JOB_OFFER(id))
    const resp = await resp_data.json()

    if(resp.error) {
      throw new Error(resp.body)
    }

    return resp
}

export const getWorkersJob = async (id) => {
    const resp_data = await useRequestGetToken(URL_GET_WORKERS_OFFER(id))
    const resp = await resp_data.json()

    if(resp.error) {
      throw new Error(resp.body)
    }

    return resp
}
