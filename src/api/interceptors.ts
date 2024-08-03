import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:4200/graphql',
})

export default instance
