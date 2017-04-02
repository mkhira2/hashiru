import Backbone from 'backbone'
import User from './models/userModel'

var ACTIONS = {

	logUserIn: function(email, password) {
		User.login(email, password)
		.done(
			function(response){
				alert('logged in!')
				console.log(response)
				location.hash = 'home'
			}
		)
		.fail(
			function(error){
				alert('problem logging in')
				console.log(error)
			}
		)
	},

	logUserOut: function(){
		User.logout()
		.done(
			function(response){
				alert('logged out')
				location.hash = 'login'
			}
		)
		.fail(
			function(error){
				alert('problem logging out')
				console.log(error)
			}
		)
	},

	registerUser: function(userData) {
		User.register(userData)
		.done(
			function(res){
				alert(`new user ${res.email} registered!`)
				console.log(res)
				ACTIONS.logUserIn(userData.email, userData.password)
			}
		)
		.fail(
			function(error){
				alert('problem registering user')
				console.log(error)
			}
		)
	}
}

export default ACTIONS