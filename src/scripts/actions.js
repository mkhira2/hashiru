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
		if (User.getCurrentUser().get('level') === null || (User.getCurrentUser().get('level') === undefined)) {
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

		var expPoints = runner.get('expPoints') + Number(miles)
		var level = Math.floor((runner.get('expPoints') + Number(miles)) / 10)

		User.getCurrentUser().save({expPoints:expPoints, level:level})
		.then(function(user) {
			console.log(user)
			STORE.set({
				expPoints:user.expPoints,
				level:user.level
			})
		},
			function(err) {
				console.log('problem increasing exp points')
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

updateUserInfo: function(miles) {

	var runner = User.getCurrentUser()

	var expPoints = runner.get('expPoints') + Number(miles)
	var level = Math.floor((runner.get('expPoints') + Number(miles)) / 10)
	var twoHundredFiftyMileBadge = runner.get('twoHundredFiftyMileBadge')
	var twoHundredMileBadge = runner.get('twoHundredMileBadge')
	var	oneHundredFiftyMileBadge = runner.get('oneHundredFiftyMileBadge')
	var	oneHundredMileBadge = runner.get('oneHundredMileBadge')
	var	fiftyMileBadge = runner.get('fiftyMileBadge')
	var	twentyFiveMileBadge = runner.get('twentyFiveMileBadge')
	var	marathonBadge = runner.get('marathonBadge')
	var	eighteenMileBadge = runner.get('eighteenMileBadge')
	var	halfMarathonBadge = runner.get('halfMarathonBadge')
	var	tenMileBadge = runner.get('tenMileBadge')
	var	tenKBadge = runner.get('tenKBadge')
	var	fiveKBadge = runner.get('fiveKBadge')

		if (expPoints >= 250) {
			twoHundredFiftyMileBadge = true
		}
		if (expPoints >= 200) {
			twoHundredMileBadge =  true
		}
		if (expPoints >= 150) {
			oneHundredFiftyMileBadge = true
		}
		if (expPoints >= 100) {
			oneHundredMileBadge = true
		}
		if (expPoints >= 50) {
			fiftyMileBadge = true
		}
		if (expPoints >= 25) {
			twentyFiveMileBadge = true
		}
		if (miles >= 26.2) {
			marathonBadge = true
		}
		if (miles >= 18) {
			 eighteenMileBadge = true
		}
		if (miles >= 13.1) {
			halfMarathonBadge = true
		}
		if (miles >= 10) {
			tenMileBadge = true
		}
		if (miles >= 6.2) {
			tenKBadge = true
		}
		if (miles >= 3.1) {
			fiveKBadge = true
		}

		User.getCurrentUser().save({
			expPoints: expPoints, 
			level: level,
			twoHundredFiftyMileBadge : twoHundredFiftyMileBadge,
			twoHundredMileBadge : twoHundredMileBadge,
			oneHundredFiftyMileBadge : oneHundredFiftyMileBadge,
			oneHundredMileBadge : oneHundredMileBadge,
			fiftyMileBadge : fiftyMileBadge,
			twentyFiveMileBadge : twentyFiveMileBadge,
			marathonBadge : marathonBadge,
			eighteenMileBadge : eighteenMileBadge,
			halfMarathonBadge : halfMarathonBadge,
			tenMileBadge : tenMileBadge,
			tenKBadge : tenKBadge,
			fiveKBadge : fiveKBadge
		})
		.then(function(user) {
			STORE.set({
				usersCollection:user
			})
		})
	}
}

export default ACTIONS