import axios from 'axios'

//validar si mi apliacion esta en deploy(prod)
const isProduction = process.env.NODE_ENV === 'production'

// si la app esta ya en produccion colocara otra ruta de lo contrario usara el localhost
const baseURL = isProduction ? "https://ironprojects.herokuapp.com/api" : "http://localhost:3001/api"

//es para mandar credenciales en los headers
axios.defaults.withCredentials = true


export  const _api = axios.create({
    baseURL,
    timeout:10000
})
