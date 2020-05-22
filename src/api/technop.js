import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://staging.co.id/tpid-test/'
})

export default instance