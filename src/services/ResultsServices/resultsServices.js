import { useRequestPostForm } from "../../hooks/useRequestPostForm/useRequestPostForm";
import { useRequestPost } from "../../hooks/useRequestPost/useRequestPost";
import {
 useRequestGet,
 useRequestGetToken,
} from "../../hooks/useRequestGet/useRequestGet";

const URL_PREDICT_USER = (id) =>
 `https://wedeal-models.herokuapp.com/user/${id}`;
const URL_PREDICT_JOB = (id) =>
 `https://wedeal-models.herokuapp.com/job_offer/${id}`;

export const getPredictUser = async (id) => {
 const data = await useRequestGet(URL_PREDICT_USER(id));
 const resp = data.json();

 if (resp.error) {
  throw new Error(resp.body);
 }

 return resp;
};

export const getPredictJob = async (id) => {
 const data = await useRequestGet(URL_PREDICT_JOB(id));
 const resp = data.json();

 if (resp.error) {
  throw new Error(resp.body);
 }

 return resp;
};
