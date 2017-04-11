import Backbone from 'backbone'
import ReactDOM from 'react-dom'
import User from './models/userModel'
import {Run} from './models/runModel'
import STORE from './store'
import $ from 'jquery'

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "2500",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

var ACTIONS = {

	addRun: function(runData) { 
		runData.user_id = User.getCurrentUser().get('_id')
		var newRun = new Run(runData)
		newRun.save()
			.then(
				function(response) {
					console.log('run added')
					toastr.info('Great run!')
					ACTIONS.fetchAllRuns(runData.user_id)
				},
				function(error) {
					console.log(error)
					toastr.error('Oops! Try again.')
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
		return `Level ${User.getCurrentUser().get('level')}`
	},

	deleteRun: function(run) {
		var userID = User.getCurrentUser().get('_id')
		run.destroy()
			.done(ACTIONS.fetchAllRuns(userID))
			.fail(function(error) {
					toastr.error('Problem deleting run.')
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

	increaseExpPointsAndLevel: function(miles) {
		var runner = User.getCurrentUser()

		runner.set({
			expPoints: runner.get('expPoints') + Number(miles),
			level: Math.floor((runner.get('expPoints') + Number(miles)) / 10)
		})

		runner.save().then(function() {
			console.log('updated exp points =', User.getCurrentUser().get('expPoints'))
		},
			function(err) {
				console.log('problem increasing exp points')
				console.log(err)
			}
		)
		STORE.set({
			expPoints:User.getCurrentUser().get('expPoints'),
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
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		User.login(email, password)
		.done(
			function(response){
				toastr.success(`Welcome, ${response.email}!`)
				console.log(response)
				location.hash = 'home'
			}
		)
		.fail(
			function(error){
				toastr.error('Incorrect email/password combination.')
				console.log(error)
			}
		)
	}
	else {
			document.querySelector('.loginEmailRejection').innerHTML = ' Invalid email address'
		}
	},

	logUserOut: function(){
		User.logout()
		.done(
			function(response){
				location.hash = 'login'
				toastr.success('See you again soon!')
			}
		)
		.fail(
			function(error){
				toastr.error('You gotta log in to log out!')
				console.log(error)
			}
		)
	},

	registerUser: function(userData) {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
		User.register(userData)
		.done(
			function(response){
				console.log(response)
				ACTIONS.logUserIn(userData.email, userData.password)
			}
		)
		.fail(
			function(error){
				toastr.error('Please try again.')
				console.log(error)
			}
		)
	}
	else {
			console.log('bad email')
			document.querySelector('.registerEmailRejection').innerHTML = 'Invalid email address'
		}
	},

	updateBossBattles: function() {
		if (User.getCurrentUser().get('expPoints') > 249.9) {
			User.getCurrentUser().save({
				twoHundredFiftyMileBadge: true
			})
		}
		if (User.getCurrentUser().get('expPoints') > 199.9) {
			User.getCurrentUser().save({
				twoHundredMileBadge: true
			})
		}
		if (User.getCurrentUser().get('expPoints') > 149.9) {
			User.getCurrentUser().save({
				oneHundredFiftyMileBadge: true
			})
		}
		if (User.getCurrentUser().get('expPoints') > 99.9) {
			User.getCurrentUser().save({
				oneHundredMileBadge: true
			})
		}
		if (User.getCurrentUser().get('expPoints') > 49.9) {
			User.getCurrentUser().save({
				fiftyMileBadge: true
			})
		}
		if (User.getCurrentUser().get('expPoints') > 24.9) {
			User.getCurrentUser().save({
				twentyFiveMileBadge: true
			})
		}
	},

	updateQuests: function(miles) {
		if (miles > 26.1) {
				User.getCurrentUser().save({
				marathonBadge: true
			})
		}
		if (miles > 17.9) {
				User.getCurrentUser().save({
				eighteenMileBadge: true
			})
		}
		if (miles > 13) {
				User.getCurrentUser().save({
				halfMarathonBadge: true
			})
		}
		if (miles > 9.9) {
				User.getCurrentUser().save({
				tenMileBadge: true
			})
		}
		if (miles > 6.1) {
				User.getCurrentUser().save({
				tenKBadge: true
			})
		}
		if (miles > 3) {
				User.getCurrentUser().save({
				fiveKBadge: true
			})
		}
	}
}

export default ACTIONS