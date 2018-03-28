import axios from 'axios'
import store from 'src/store'

const request = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

request.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['token'] = store.getters.token
  }
  return config
}, error => Promise.reject(error))

request.interceptors.response.use(response => response, error => {
  Promise.reject(error)
})

export default request
