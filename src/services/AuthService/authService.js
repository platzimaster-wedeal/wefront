import { useRequestPost } from "../../hooks/useRequestPost/useRequestPost";
import { useRequestGet } from "../../hooks/useRequestGet/useRequestGet";

const URL_LOGIN = "https://wedeal.herokuapp.com/api/v1/auth/login";

export const getAuth = async (data) => {
 const resp_data = await useRequestPost(URL_LOGIN, data);
 const resp = await resp_data.json();

 if (resp.error) {
  throw new Error(resp.body);
 }

 return resp;
};
