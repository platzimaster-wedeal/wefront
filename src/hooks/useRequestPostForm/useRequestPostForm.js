export const useRequestPostForm = (url, data) => {

  const formData = new FormData()

  for(let key in data) {
    formData.append(key, data[key])
  }

  const resp = fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer', 
    body: formData
  })

  return resp

}