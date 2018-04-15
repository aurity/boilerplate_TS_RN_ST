import apiService, { getDataFromAxios } from '../../../api/api.service'

export {
  fetchAllTubes,
}

function fetchAllTubes() {
  return apiService
    .get('/Line/Mode/tube')
    .then(data => getDataFromAxios(data))
}
