import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8888/produtos',
    timeout: 1000
});

export default api;