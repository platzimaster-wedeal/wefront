import { useRequestPost } from "../../hooks/useRequestPost/useRequestPost";
import { useRequestPostForm } from "../../hooks/useRequestPostForm/useRequestPostForm";
import {
 useRequestUpdateForm,
 useRequestPatchForm,
} from "../../hooks/useRequestUpdateForm/useRequestUpdateForm";
import {
 useRequestGet,
 useRequestGetToken,
} from "../../hooks/useRequestGet/useRequestGet";

const URL_GET = (id) => `https://wedeal.herokuapp.com/api/v1/users/${id}`;
const URL_PATCH = (id) => `https://wedeal.herokuapp.com/api/v1/users/${id}`;
const URL_GET_CONNECTIONS = (id) =>
 `https://wedeal.herokuapp.com/api/v1/users/connections/${id}`;

export const getProfile = async (id) => {
 const data = await useRequestGetToken(URL_GET(id));
 const resp = await data.json();

 if (resp.error) {
  throw new Error(resp.body);
 }

 return resp;
};

export const getConnections = async (id) => {
 const data = await useRequestGetToken(URL_GET_CONNECTIONS(id));
 const resp = await data.json();

 if (resp.error) {
  throw new Error(resp.body);
 }

 return resp;
};

export const patchProfile = async (id, data) => {
 const resp_data = await useRequestPatchForm(URL_PATCH(id), data);
 const resp = await resp_data.json();

 if (resp.error) {
  throw new Error(resp.body);
 }

 return resp;
};

export const putProfile = async (id, data) => {
 const resp_data = await useRequestUpdateForm(URL_PATCH(id), data);
 const resp = await resp_data.json();

 if (resp.error) {
  throw new Error(resp.body);
 }

 return resp;
};
