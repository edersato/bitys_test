import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7153/api/', //Https
    headers: {
        'Content-Type': 'application.json'
    }
})

export default axiosInstance;