import axios from 'axios'

export const getRepo = async(payload) => {
    try {
        return axios.get(`https://api.github.com/users/${payload.username}/repos`, payload)
    } catch (error) {
        console.log(error)
    }
}