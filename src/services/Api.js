import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://customer-list-api.herokuapp.com' : 'http://localhost:3000'
  })
}
