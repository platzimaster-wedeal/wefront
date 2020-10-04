import { useRequestPost } from '../../hooks/useRequestPost/useRequestPost'
import { useRequestGet } from '../../hooks/useRequestGet/useRequestGet'

const URL_GET = ''
const URL_GET_POST = (id) => `${id}`

export const getPosts = async () => {
  const data = await useRequestGet(URL_GET)
  const resp = await data.json()

  if(resp.error) {
    throw new Error(resp.body)
  }

  return resp
}


export const getPost = async (id) => {
  const data = await useRequestGet(URL_GET_POST(id))
  const resp = await data.json()

  if(resp.error) {
    throw new Error(resp.body)
  }

  return resp
}


export const createPost = async (data) => {
  const resp_data = await useRequestPost(URL_GET, data)
  const resp = await resp_data.json()

  if(resp.error) {
    throw new Error(resp.body)
  }

  return resp
}