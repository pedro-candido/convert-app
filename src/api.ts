import axios from 'axios'

// Docs: https://docs.awesomeapi.com.br/api-de-moedas
export const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json/last'
})