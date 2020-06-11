import axios from 'axios'

let apios = axios.create({
  baseURL: process.env.CONTENTFUL_API,
})

export default apios
