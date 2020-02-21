import axios from 'axios'
// import Cookies from 'universal-cookie'

const config = {
  token: '',
  baseUrl: process.env.URL,
  url: `${process.env.URL}/api`,
  serviceUrl: ''
}
// const COOKIES = new Cookies()

const api = call => {
  return new Promise((resolve, reject) => {
    const {
      endpoint,
      method = 'GET',
      params = {},
      data = {},
      headers = {}
    } = call
    const url = config.url + endpoint
    // const token = COOKIES.get('user_token')
    const defaultHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Root-Key':
        '',
      Platform: 'Web'
    }

    const mergedHeaders = { ...defaultHeaders, ...headers }

    return axios({ mergedHeaders, method, url, params, data })
      .then(result => {
        resolve(result)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default api
