import axios from 'axios'



const axiosConfig = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})

export default axiosConfig;