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

	deleteRun: function(run) {
		var userID = User.getCurrentUser().get('_id')
		run.destroy()
			.done(ACTIONS.fetchAllRuns(userID))
			.fail(function(error) {
					alert('problem deleting run')
					console.log(error)
				})
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

	fetchRunner: function(){

		var users = STORE.get('usersCollection')

		users.fetch()
			.then(function(){
				STORE.set({
					usersCollection:users
				})
			})
		},

	increaseExpPoints: function(miles) {
		// get experience points dude. User.getCurrentUser().get('expPoints')
		var runner = User.getCurrentUser()

		runner.set({
			expPoints: runner.get('expPoints') + Number(miles)

		})
		console.log('exp points in increaseExpPoints', runner.get('expPoints'))

		runner.save().then(function() {
			console.log('updated exp points =', User.getCurrentUser().get('expPoints'))
		},
			function(err) {
				console.log('problem increasing exp points')
				console.log(err)
			}
		)
		STORE.set({
			expPoints:User.getCurrentUser().get('expPoints')

		})
	},

	increaseLevel: function(miles) {
		// level up dude. User.getCurrentUser().get('level')
		var runner = User.getCurrentUser()

		runner.set({
			level: runner.get('level') + Number(miles)
		})

		runner.save().then(function() {
			console.log('updated level =', User.getCurrentUser().get('level'))
		},
			function(err) {
				console.log('problem increasing level')
				console.log(err)
			}
		)
		STORE.set({
			level:User.getCurrentUser().get('level')
		})
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