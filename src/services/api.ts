import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/alexmmalta/fakeapi/produtos',
    timeout: 1000
});

export default api;