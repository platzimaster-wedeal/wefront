import {
 useRequestPost,
 useRequestDelete,
} from "../../hooks/useRequestPost/useRequestPost";
import { useRequestPostForm } from "../../hooks/useRequestPostForm/useRequestPostForm";
import {
 useRequestGetToken,
 useRequestGet,
} from "../../hooks/useRequestGet/useRequestGet";

const URL_REGISTER = "https://wedeal.herokuapp.com/api/v1/users";
const URL_GET = (id) => `https://wedeal.herokuapp.com/api/v1/users/${id}`;
const URL_GET_FOLLOWERS = (id) =>
 `https://wedeal.herokuapp.com/api/v1/follows/${id}/followers`;
const URL_POST_FOLLOW = (idProfile, idUser) =>
 `https://wedeal.herokuapp.com/api/v1/follows/${idProfile}/follow/${idUser}`;
const URL_POST_SCORE = "https://wedeal.herokuapp.com/api/v1/scores";
const URL_PUT_PROBLEM = (id) =>
 `https://wedeal.herokuapp.com/api/v1/problems/${id}`;

export const registerUser = async (data) => {
 const data_resp = await useRequestPostForm(URL_REGISTER, data);
 const resp = await data_resp.json();

 if (resp.error) {
  throw new Error(resp.body);
 }

 return resp;
};

export const getUser = async (id) => {
 const data_resp = await useRequestGetToken(URL_GET(id));
 const resp = await data_resp.json();

 if (resp.error) {
  throw new Error(resp.body);
 }

 return resp;
};

export const postFollowUser = async (idProfile, idUser) => {
 const data_resp = await useRequestPost(URL_POST_FOLLOW(idProfile, idUser));
 const resp = await data_resp.json();

 if (resp.error) {
  throw new Error(resp.body);
 }

 return resp;
};
export const postUnfollowUser = async (idProfile, idUser) => {
 const data_resp = await useRequestDelete(URL_POST_FOLLOW(idProfile, idUser));
 const resp = await data_resp.json();

 if (resp.error) {
  throw new Error(resp.body);
 }

 return resp;
};

export const getUserFollowers = async (id) => {
 const data_resp = await useRequestGetToken(URL_GET_FOLLOWERS(id));
 const resp = await data_resp.json();

 if (resp.error) {
  throw new Error(resp.body);
 }

 return resp;
};

export const postScoreUser = async (data) => {
 const data_score = await useRequestPostForm(URL_POST_SCORE, data);
 const resp_score = await data_score.json();

 // const data_problem = await useRequestPostForm(URL_PUT_PROBLEM(problem.id), problem)
 // const resp_problem = await data_problem.json()

 if (resp_score.error) {
  throw new Error(resp_score.body);
 }

 return resp_score;
};
