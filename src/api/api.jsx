import axios from 'axios'
const apiKey = process.env.API_KEY

export async function fetchDataByTitle(year) {
  const response = await axios.get(
    `https://www.omdbapi.com/?s=movie&y=${year}&apikey=fb6cff36`
  )
  return response.data
}

export async function fetchDataBySearch(search) {
  const response = await axios.get(
    `https://www.omdbapi.com/?s=${search}&apikey=fb6cff36`
  )
  return response.data
}

export async function fetchDataById(id) {
  const response = await axios.get(
    `https://www.omdbapi.com/?i=${id}&apikey=fb6cff36`
  )
  return response.data
}
