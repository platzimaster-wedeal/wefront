import { useRequestPost } from '../../hooks/useRequestPost/useRequestPost'
import { useRequestGet } from '../../hooks/useRequestGet/useRequestGet'

const URL_GET = (id) => `https://wedeal.herokuapp.com/api/v1/users/${id}`;
const URL_PATCH = '';

export const getProfile = async (id) => {
    const data = await useRequestGet(URL_GET(id));
    const resp = await data.json()
    
    if(resp.error) {
      throw new Error(resp.body)
    }

    return resp
}

export const patchUser = async (data) => {
    const resp_data = await useRequestPost(URL_PATCH, data);
    const resp = await resp_data.json()
    
    if(resp.error) {
      throw new Error(resp.body)
    }

    return resp
}