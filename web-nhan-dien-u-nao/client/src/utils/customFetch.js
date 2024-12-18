import axios from 'axios';
const customFetch = axios.create({
    baseURL: '/api/v1',
    timeout: 10000,
});

export default customFetch;