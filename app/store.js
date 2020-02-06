import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const localStorage = require("tns-core-modules/application-settings")

export default new Vuex.Store({
  	state: {
      	token: localStorage.getString('access_token') || null,
  	},

    getters: {
      	loggedIn(state){
        	return state.token !== null
      	}
    },

  	mutations: {
  	   	retrieveToken(state, payload){
        	state.token = payload
       	},

       	destroyToken(state, payload){
        	state.token = null
       	}
  	},

  	actions: {
      	register(context, payload){
        	return new Promise((resolve, reject) =>{

	          	axios.post('http://192.168.1.147:8000/api/register', {
	            	name: payload.name,
	            	email: payload.email,
	            	password: payload.password,
	          	})
	          	.then(response => {
	            	resolve(response)
	          	})
	          	.catch(error => {
	            	reject(error)
	          	})
        	})
      	},

      	destroyToken(context){
        	axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

        	if(context.getters.loggedIn){
          		return new Promise((resolve, reject) =>{

            		axios.post('http://192.168.1.147:8000/api/logout')
            		.then(response => {
		              	localStorage.deleteString('access_token')
		              	context.commit('destroyToken')
	              		resolve(response)
	            	})
            		.catch(error => {
		              	localStorage.deleteString('access_token')
		              	context.commit('destroyToken')
		              	reject(error)
            		})
          		})
        	}
      	},

  		retrieveToken(context, payload){
  			// try {
  			// 	let response = await axios.get('http://checkout.com:8000/api/demo')

  			// 	let data = response
  			// 	console.log(data)
  			// } catch(e) {
  			// 	// statements
  			// 	console.log(e.response);
  			// }
  			console.log(payload.username)
        	return new Promise((resolve, reject) =>{

	          	axios.post('http://192.168.1.147:8000/api/login', {
	            	username: payload.username,
	            	password: payload.password
	          	})
          		.then(response => {
            		const token = response.data.access_token

            		localStorage.setString('access_token', token)
            		context.commit('retrieveToken', token)
            		resolve(response)
          		})
          		.catch(error => {
          			console.log('Error papu')
            		console.log(error.response)
            		reject(error)
          		})
        	})
  		},

      	getCurrentUser(context, payload){
        	return new Promise((resolve, reject) =>{
          		axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

          		axios.get('http://192.168.1.147:8000/api/user')
          		.then(response => {
              		console.log(response.data);
          		})
          		.catch(error => {
            		console.log(error.response)
            		reject(error)
          		})
        	}) 
      	}

  	},

  	modules: {
  	
  	}
})













