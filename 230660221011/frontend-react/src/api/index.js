import axios from 'axios';

const Api = axios.create({
    // Alamat backend express
    baseURL: 'http://localhost:3000'
})

export default Api;