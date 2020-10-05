import { useState } from 'react'


export const useGetLocation = async () => {

const [coordinates, setCoordinates] = useState({}) 
const [isError, setIsError] = useState({}) 
const [isLoading, setIsLoading] = useState(false) 


const success = async (pos) => {
  setIsLoading(true)
  await setCoordinates(pos)
  setIsLoading(false)
}

const err = (err) => {
  setIsError(err)
  throw new Error(err)
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximunAge: 0
}

  try {
       await navigator.geolocation.getCurrentPosition(success, err, options)
  } catch(err) {
    console.error(err)
  }

  return [coordinates, isError, isLoading]
}