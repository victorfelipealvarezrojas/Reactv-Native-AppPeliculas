import axios from 'axios';


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'afa61251f79b404a376995f75669c21e',
        language: 'es-ES'
    }
});

export default movieDB;