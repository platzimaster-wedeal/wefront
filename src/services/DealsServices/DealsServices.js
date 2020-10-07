import { useRequestPostForm } from '../../hooks/useRequestPostForm/useRequestPostForm'
import { useRequestPost } from '../../hooks/useRequestPost/useRequestPost'
import { useRequestGet, useRequestGetToken } from '../../hooks/useRequestGet/useRequestGet'

const URL_GET_DEALS = id => `https://wedeal.herokuapp.com/api/v1/problems`
const URL_GET_DEAL = id => `https://wedeal.herokuapp.com/api/v1/problems`

export const getDeals = async (id) => {
  const data = await useRequestGetToken(URL_GET_DEALS(id))
  const resp = await data.json()

  if(resp.error) {
    throw new Error(resp.body)
  }

  return resp
}