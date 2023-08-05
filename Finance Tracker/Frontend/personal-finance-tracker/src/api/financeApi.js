import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://3b85-167-220-238-187.ngrok-free.app'
})

export default instance;