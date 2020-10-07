import { getCookie } from "../../utils/getCookie";

export const useRequestPost = (url, data) => {
 const resp = fetch(url, {
  method: "POST",
  mode: "cors",
  cache: "no-cache",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Accept: "application/json",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
  body: JSON.stringify(data),
 });

 return resp;
};

export const useRequestDelete = (url, data) => {
 const token = getCookie("token");

 const resp = fetch(url, {
  method: "POST",
  mode: "cors",
  cache: "no-cache",
  headers: {
   Authorization: `Bearer ${token || ""}`,
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Accept: "application/json",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
  body: JSON.stringify(data),
 });

 return resp;
};
