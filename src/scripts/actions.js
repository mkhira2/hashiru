import User from './models/userModel'
import {Run} from './models/runModel'
import STORE from './store'


// set parameters for 'leveled up' and 'error' toastr alerts
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

const ACTIONS = {

	// from views/addRunPage.js -- runData containes miles ran and userID
	// captures userID and saves to backbone model
	// calls ACTIONS.fetchAllRuns
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

	// from components/userInfo.js -- display current user name, if available
	checkLogInName: function() {
		if (User.getCurrentUser() === null || (User.getCurrentUser().get('name') === undefined)) {
			return 'Welcome!'
		}
		return `${User.getCurrentUser().get('name')}`
	},

	// from components/userInfo.js -- display current user level, if available
	checkLevel: function() {
		if (User.getCurrentUser().get('level') === null || (User.getCurrentUser().get('level') === undefined)) {
			return ''
		}
		return `Level ${User.getCurrentUser().get('level')}`
	},

	// from views/addRunPage.js -- delete saved run if X clicked
	deleteRun: function(run) {
		let userID = User.getCurrentUser().get('_id')
		run.destroy()
			.done(ACTIONS.fetchAllRuns(userID))
			.fail(function(error) {
					toastr.error('Problem deleting run.')
					console.log(error)
				})
	},

	// from ACTIONS.addRun -- adds logged run
		// to run collection, resets store with
		// updated run
	fetchAllRuns: function(inputID) {
		let runColl = STORE.get('runCollection')
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

	// from views/loginPage.js -- log user in if email and password match
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

	// from views/loginPage.js -- log user out
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

	// from views/loginPage.js -- register user, including email validation
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

	// from views/addRunPage.js -- update badge status in database, and
		// rerender page to show updated badge status
		// (this affects CSS class found in boss/quests container components!)
	updateUserInfo: function(miles) {

		let runner = User.getCurrentUser()
		let expPoints = runner.get('expPoints') + Number(miles)
		let level = Math.floor((runner.get('expPoints') + Number(miles)) / 10)
		let twoHundredFiftyMileBadge = runner.get('twoHundredFiftyMileBadge')
		let twoHundredMileBadge = runner.get('twoHundredMileBadge')
		let	oneHundredFiftyMileBadge = runner.get('oneHundredFiftyMileBadge')
		let	oneHundredMileBadge = runner.get('oneHundredMileBadge')
		let	fiftyMileBadge = runner.get('fiftyMileBadge')
		let	twentyFiveMileBadge = runner.get('twentyFiveMileBadge')
		let	marathonBadge = runner.get('marathonBadge')
		let	eighteenMileBadge = runner.get('eighteenMileBadge')
		let	halfMarathonBadge = runner.get('halfMarathonBadge')
		let	tenMileBadge = runner.get('tenMileBadge')
		let	tenKBadge = runner.get('tenKBadge')
		let	fiveKBadge = runner.get('fiveKBadge')

			if (runner.get('level') !== level) {
				toastr.success('YOU GAINED A LEVEL!')
			}
			if (expPoints >= 250) {
				if (!twoHundredFiftyMileBadge) {
					bootbox.alert({
						message: "<h5>Congratulations! You earned the 250 Mile quest badge!</h5> <img src='./images/twohundredfiftymilebadge.png' />",
						buttons: {
							ok: {
								label: 'Runners just do it - they reach for the finish line even if someone else has reached it first.'
							}
						}
					})
				}
				twoHundredFiftyMileBadge = true
			}
			if (expPoints >= 200) {
				if (!twoHundredMileBadge) {
					bootbox.alert({
						message: "<h5>Congratulations! You earned the 200 Mile quest badge!</h5> <img src='./images/twohundredmilebadge.png' />",
						buttons: {
							ok: {
								label: 'If you train your mind for running, everything else will be easy.'
							}
						}
					})
				}
				twoHundredMileBadge =  true
			}
			if (expPoints >= 150) {
				if (!oneHundredFiftyMileBadge) {
					bootbox.alert({
						message: "<h5>Congratulations! You earned the 150 Mile quest badge!</h5> <img src='./images/onehundredfiftymilebadge.png' />",
						buttons: {
							ok: {
								label: 'If you can\'t win, make the fellow ahead of you break the record.'
							}
						}
					})
				}
				oneHundredFiftyMileBadge = true
			}
			if (expPoints >= 100) {
				if (!oneHundredMileBadge) {
					bootbox.alert({
						message: "<h5>Congratulations! You earned the 100 Mile quest badge!</h5> <img src='./images/onehundredmilebadge.png' />",
						buttons: {
							ok: {
								label: 'The miracle isn\'t that I finished. The miracle is that I had the courage to start.'
							}
						}
					})
				}
				oneHundredMileBadge = true
			}
			if (expPoints >= 50) {
				if (!fiftyMileBadge) {
					bootbox.alert({
						message: "<h5>Congratulations! You earned the 50 Mile quest badge!</h5> <img src='./images/fiftymilebadge.png' />",
						buttons: {
							ok: {
								label: 'It\'s a treat being a runner, out in the world by yourself with not a soul to tell you what to do.'
							}
						}
					})
				}
				fiftyMileBadge = true
			}
			if (expPoints >= 25) {
				if (!twentyFiveMileBadge) {
					bootbox.alert({
						message: "<h5>Congratulations! You earned the 25 Mile quest badge!</h5> <img src='./images/twentyfivemilebadge.png' />",
						buttons: {
							ok: {
								label: 'The best pace is a suicide pace and today looks like a good day to die.'
							}
						}
					})
				}
				twentyFiveMileBadge = true
			}
			if (miles >= 26.2) {
				if (!marathonBadge) {
					bootbox.alert({
						message: "<h5>Congratulations! You earned the Marathon boss badge!</h5> <img src='./images/marathonbadge.png' />",
						buttons: {
							ok: {
								label: 'A race is a work of art that people can look at and be affected in as many ways as they\'re capable of understanding.'
							}
						}
					})
				}
				marathonBadge = true
			}
			if (miles >= 18) {
				if (!eighteenMileBadge) {
					bootbox.alert({
						message: "<h5>Congratulations! You earned the 18 Mile boss badge!</h5> <img src='./images/eighteenmilebadge.png' />",
						buttons: {
							ok: {
								label: 'Pain is inevitable. Suffering is optional.'
							}
						}
					})
				}
				 eighteenMileBadge = true
			}
			if (miles >= 13.1) {
				if (!halfMarathonBadge) {
					bootbox.alert({
						message: "<h5>Congratulations! You earned the Half Marathon boss badge!</h5> <img src='./images/halfmarathonbadge.png' />",
						buttons: {
							ok: {
								label: 'What I want is to be number one.'
							}
						}
					})
				}
				halfMarathonBadge = true
			}
			if (miles >= 10) {
				if (!tenMileBadge) {
					bootbox.alert({
						message: "<h5>Congratulations! You earned the Ten Mile boss badge!</h5> <img src='./images/tenmilebadge.png' />",
						buttons: {
							ok: {
								label: 'The obsession with running is really the obsession with the potential for more and more life.'
							}
						}
					})
				}
				tenMileBadge = true
			}
			if (miles >= 6.2) {
				if (!tenKBadge) {
					bootbox.alert({
						message: "<h5>Congratulations! You earned the 10K boss badge!</h5> <img src='./images/tenkbadge.png' />",
						buttons: {
							ok: {
								label: 'Somebody may beat me, but they are going to have to bleed to do it.'
							}
						}
					})
				}
				tenKBadge = true
			}
			if (miles >= 3.1) {
				if (!fiveKBadge) {
					bootbox.alert({
						message: "<h5>Congratulations! You earned the 5K boss badge!</h5> <img src='./images/fivekbadge.png' />",
						buttons: {
							ok: {
								label: 'To give anything less than your best is to sacrifice the gift.'
							}
						}
					})
				}
				fiveKBadge = true
			}

		User.getCurrentUser().save({
			// update badge status in model
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
