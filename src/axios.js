import axios from 'axios'
import router from './router/index'
import store from './store/index'
import * as types from './store/types'

//
axios.default.timeout = 1000
axios.defaults.headers.post['Content-Type'] = 'application/json'

const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json'

instance.interceptors.response.use(response => {
	return response
}, err => {
	return Promise.reject(err)
})

export default {
	userRegister(data) {
		return instance.post('/api/register', data)
	},
	UserLogin(data) {
		return instance.post('/api/login', data)
	}
}
