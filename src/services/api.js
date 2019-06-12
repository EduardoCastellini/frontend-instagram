import axios from 'axios';

const api = axios.create({
    baseURL: 'https://enigmatic-inlet-99957.herokuapp.com',
})

export default api;