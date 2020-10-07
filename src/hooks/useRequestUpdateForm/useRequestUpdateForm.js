import { getCookie } from "../../utils/getCookie";

export const useRequestUpdateForm = (url, data) => {
 const token = getCookie("token");

 const formData = new FormData();

 for (let key in data) {
  formData.append(key, data[key]);
 }

 const resp = fetch(url, {
  method: "PUT",
  mode: "cors",
  cache: "no-cache",
  redirect: "follow",
  headers: {
   Authorization: `Bearer ${token || ""}`,
  },
  referrerPolicy: "no-referrer",
  body: formData,
 });

 return resp;
};

export const useRequestPatchForm = (url, data) => {
 const token = getCookie("token");

 const formData = new FormData();

 for (let key in data) {
  formData.append(key, data[key]);
 }

 const resp = fetch(url, {
  method: "PATCH",
  mode: "cors",
  cache: "no-cache",
  redirect: "follow",
  headers: {
   Authorization: `Bearer ${token || ""}`,
  },
  referrerPolicy: "no-referrer",
  body: formData,
 });

 return resp;
};
