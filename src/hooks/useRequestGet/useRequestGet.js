import { getCookie } from "../../utils/getCookie";

export const useRequestGetToken = (url) => {
 const token = getCookie("token");

 const resp = fetch(url, {
  method: "GET",
  mode: "cors",
  cache: "no-cache",
  headers: {
   Authorization: `Bearer ${token || ""}`,
  },
 });

 return resp;
};

export const useRequestGet = (url) => {
 const resp = fetch(url, {
  method: "GET",
  mode: "cors",
  cache: "no-cache",
 });

 return resp;
};
