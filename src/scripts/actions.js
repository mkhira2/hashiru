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
  "timeOut": "5000",
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

		if (runner.get('level') !== level) {
			toastr.success('YOU GAINED A LEVEL!')
		}
		if (expPoints >= 250) {
			if (!twoHundredFiftyMileBadge) {
				bootbox.alert("<h5>Congratulations! You earned the 250 Mile quest badge!</h5> <img src='./images/twohundredfiftymilebadge.png' />")
			}
			twoHundredFiftyMileBadge = true
		}
		if (expPoints >= 200) {
			if (!twoHundredMileBadge) {
				bootbox.alert("<h5>Congratulations! You earned the 200 Mile quest badge!</h5> <img src='./images/twohundredmilebadge.png' />")
			}
			twoHundredMileBadge =  true
		}
		if (expPoints >= 150) {
			if (!oneHundredFiftyMileBadge) {
				bootbox.alert("<h5>Congratulations! You earned the 150 Mile quest badge!</h5> <img src='./images/onehundredfiftymilebadge.png' />")
			}
			oneHundredFiftyMileBadge = true
		}
		if (expPoints >= 100) {
			if (!oneHundredMileBadge) {
				bootbox.alert("<h5>Congratulations! You earned the 100 Mile quest badge!</h5> <img src='./images/onehundredmilebadge.png' />")
			}
			oneHundredMileBadge = true
		}
		if (expPoints >= 50) {
			if (!fiftyMileBadge) {
				bootbox.alert("<h5>Congratulations! You earned the 50 Mile quest badge!</h5> <img src='./images/fiftymilebadge.png' />")
			}
			fiftyMileBadge = true
		}
		if (expPoints >= 25) {
			if (!twentyFiveMileBadge) {
				bootbox.alert("<h5>Congratulations! You earned the 25 Mile quest badge!</h5> <img src='./images/twentyfivemilebadge.png' />")
			}
			twentyFiveMileBadge = true
		}
		if (miles >= 26.2) {
			if (!marathonBadge) {
				bootbox.alert("<h5>Congratulations! You earned the Marathon boss badge!</h5> <img src='./images/marathonbadge.png' />")
			}
			marathonBadge = true
		}
		if (miles >= 18) {
			if (!eighteenMileBadge) {
				bootbox.alert("<h5>Congratulations! You earned the 18 Mile boss badge!</h5> <img src='./images/eighteenmilebadge.png' />")
			}
			 eighteenMileBadge = true
		}
		if (miles >= 13.1) {
			if (!halfMarathonBadge) {
				bootbox.alert("<h5>Congratulations! You earned the Half Marathon boss badge!</h5> <img src='./images/halfmarathonbadge.png' />")
			}
			halfMarathonBadge = true
		}
		if (miles >= 10) {
			if (!tenMileBadge) {
				bootbox.alert("<h5>Congratulations! You earned the Ten Mile boss badge!</h5> <img src='./images/tenmilebadge.png' />")
			}
			tenMileBadge = true
		}
		if (miles >= 6.2) {
			if (!tenKBadge) {
				bootbox.alert("<h5>Congratulations! You earned the 10K boss badge!</h5> <img src='./images/tenkbadge.png' />")
			}
			tenKBadge = true
		}
		if (miles >= 3.1) {
			if (!fiveKBadge) {
				bootbox.alert("<h5>Congratulations! You earned the 5K boss badge!</h5> <img src='./images/fivekbadge.png' />")
			}
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