import axios from 'axios'

export const axiosRequest = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/"
})