import { useRequestPost } from '../../hooks/useRequestPost/useRequestPost'
import { useRequestPostForm } from '../../hooks/useRequestPostForm/useRequestPostForm'
import { useRequestGet } from '../../hooks/useRequestGet/useRequestGet'

const URL_REGISTER = 'https://wedeal.herokuapp.com/api/v1/users'
const URL_GET = id => `https://wedeal.herokuapp.com/api/v1/users/${id}`

export const registerUser = async (data) => {
  const data_resp = await useRequestPostForm(URL_REGISTER, data)
  const resp = await data_resp.json()

  if(resp.error) {
    throw new Error(resp.body)
  } 

  return resp
} 

export const getUser = async (id) => {
  const data_resp = await useRequestGet(URL_GET(id))
  const resp = await data_resp.json()

  if(resp.error) {
    throw new Error(resp.body)
  } 

  return resp
} 