import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api', // Ajuste conforme sua configuração do Laravel
});

export default api;