import { useRequestGet } from '../../hooks/useRequestGet/useRequestGet'

const URL = 'https://wedeal.herokuapp.com/api/v1/workAreas/'

export const getCategories = async () => {
  const data = await useRequestGet(URL)
  const resp = data.json()

  if(resp.error) {
    throw new Error(resp.body)
  }

  return resp
}