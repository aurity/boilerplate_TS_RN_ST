import axios from 'axios'

const apiService = axios.create({
  baseURL: 'https://api.tfl.gov.uk',
  timeout: 5000,
})

export function getDataFromAxios(data: any) {
  return data.data
}

export default apiService
