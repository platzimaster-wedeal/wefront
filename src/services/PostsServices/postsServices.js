import { useRequestPost, useRequestDelete } from "../../hooks/useRequestPost/useRequestPost";
import { useRequestPostForm } from "../../hooks/useRequestPostForm/useRequestPostForm";
import {
 useRequestGet,
 useRequestGetToken,
} from "../../hooks/useRequestGet/useRequestGet";

const URL_GET = "https://wedeal.herokuapp.com/api/v1/posts";
const URL_GET_POST = (id) => `https://wedeal.herokuapp.com/api/v1/posts/${id}`;
const URL_LIKE_POST = (idPost, idUser) => `https://wedeal.herokuapp.com/api/v1/likes/${idPost}/users/${idUser}`;

export const getPosts = async () => {
 const data = await useRequestGetToken(URL_GET);
 const resp = await data.json();

 if (resp.error) {
  throw new Error(resp.body);
 }

 return resp;
};

export const getPost = async (id) => {
 const data = await useRequestGetToken(URL_GET_POST(id));
 const resp = await data.json();

 if (resp.error) {
  throw new Error(resp.body);
 }

 return resp;
};

export const createPost = async (data) => {
 const resp_data = await useRequestPostForm(URL_GET, data);
 const resp = await resp_data.json();

 if (resp.error) {
  throw new Error(resp.body);
 }

 return resp;
};

export const likePost = async (idPost, idUser) => {
  const data = await useRequestPost(URL_LIKE_POST(idPost, idUser), {})
  const resp = await data.json()

  if(resp.error) {
    throw new Error(resp.body)
  }

  return resp;
}

export const unlikePost = async (idPost, idUser) => {
  const data = await useRequestDelete(URL_LIKE_POST(idPost, idUser), {})
  const resp = await data.json()

  if(resp.error) {
    throw new Error(resp.body)
  }

  return resp;
}
