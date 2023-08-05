import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://club-manager-1s0e.onrender.com'
})

export default instance;