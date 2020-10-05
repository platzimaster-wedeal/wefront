import { useRequestGet } from '../../hooks/useRequestGet/useRequestGet'

const URL = 'http://localhost:3000/api/v1/countries'

export const getCountries = async () => {
  const data = await useRequestGet(URL)
  const resp = data.json()

  if(resp.error) {
    throw new Error(resp.body)
  }

  return resp
}