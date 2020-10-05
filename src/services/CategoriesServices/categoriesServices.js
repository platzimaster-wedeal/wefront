import { useRequestGet } from '../../hooks/useRequestGet/useRequestGet'

const URL = ''

export const getCategories = async () => {
  const data = await useRequestGet(URL)
  const resp = data.json()

  if(resp.error) {
    throw new Error(resp.body)
  }

  return resp.body
}