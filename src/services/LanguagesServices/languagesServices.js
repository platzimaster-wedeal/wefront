import { useRequestGet } from "../../hooks/useRequestGet/useRequestGet";

const URL = "https://wedeal.herokuapp.com/api/v1/languages/";

export const getLanguages = async () => {
 const data = await useRequestGet(URL);
 const resp = await data.json();

 if (resp.error) {
  throw new Error(resp.body);
 }

 return resp.body;
};
