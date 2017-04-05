import Backbone from 'backbone'
import ReactDOM from 'react-dom'
import User from './models/userModel'
import {Run} from './models/runModel'
import STORE from './store'
import $ from 'jquery'

var ACTIONS = {

	addRun: function(runData) { 
		runData.user_id = User.getCurrentUser().get('_id')
		var newRun = new Run(runData)
		newRun.save()
			.then(
				function(response) {
					console.log('run added')
					ACTIONS.fetchAllRuns(runData.user_id)
				},
				function(error) {
					alert('problem adding run')
				}
			)
	},

	checkLogInName: function() {
		if (User.getCurrentUser() === null || (User.getCurrentUser().get('name') === undefined)) {
			return 'Welcome!'
		}
		return `${User.getCurrentUser().get('name')}`
	},

	checkLevel: function() {
		if (User.getCurrentUser() === null || (User.getCurrentUser().get('name') === undefined)) {
			return ''
		}
		return `Level ${STORE.get('level')}`
	},

	fetchAllRuns: function(inputID) { 
		var runColl = STORE.get('runCollection')
		runColl.fetch({
			data: {
				user_id: inputID
			}
		})
			.then(function(){
				STORE.set({
					runCollection: runColl
				})
			})
	},

	fetchRunners: function(){

		var runnerColl = STORE.get('runnerCollection')

		runnerColl.fetch()
			.then(function(){
			})

	},

	increaseLevel: function(miles) {
		// get experience points dude. User.getCurrentUser().get('expPoints')
		var runner = User.getCurrentUser()

		runner.set({
			expPoints: runner.get('expPoints') + Number(miles)
		})

		runner.save().then(function() {
			console.log(User.getCurrentUser().get('expPoints'))
		},
			function(err) {
				console.log('OOPS')
				console.log(err)
			}
		)
	},

	loggedInStatus: function() {
		if (User.getCurrentUser() != null){

			STORE.set({userLoginStatus: 'Log Out'})
			console.log(STORE.data.userLoginStatus)

			return 'Log Out'
		}

		else {

			STORE.set({userLoginStatus: 'Log In'})
			console.log(STORE.data.userLoginStatus)

			return 'Log In'
		}
	},

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