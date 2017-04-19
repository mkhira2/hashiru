import React from 'react'

var QuestsContainer = React.createClass({
	render: function() {

		/*
			if (current user has unlocked the relevant badge) {
				display the badge
			}
			else {
				tell you to get out there!
			}
		*/

		if (User.getCurrentUser().get('twoHundredFiftyMileBadge') === true) {
			return (
				<div className='questsContainer'>
					<h4>Longest Quest Completed</h4>
					<img src='./images/twohundredfiftymilebadge.png' />
				</div>
			)
		}

		if (User.getCurrentUser().get('twoHundredMileBadge') === true) {
			return (
				<div className='questsContainer'>
					<h4>Longest Quest Completed</h4>
					<img src='./images/twohundredmilebadge.png' />
				</div>
			)
		}

		if (User.getCurrentUser().get('oneHundredFiftyMileBadge') === true) {
			return (
				<div className='questsContainer'>
					<h4>Longest Quest Completed</h4>
					<img src='./images/onehundredfiftymilebadge.png' />
				</div>
			)
		}

		if (User.getCurrentUser().get('oneHundredMileBadge') === true) {
			return (
				<div className='questsContainer'>
					<h4>Longest Quest Completed</h4>
					<img src='./images/onehundredmilebadge.png' />
				</div>
			)
		}

		if (User.getCurrentUser().get('fiftyMileBadge') === true) {
			return (
				<div className='questsContainer'>
					<h4>Longest Quest Completed</h4>
					<img src='./images/fiftymilebadge.png' />
				</div>
			)
		}

		if (User.getCurrentUser().get('twentyFiveMileBadge') === true) {
			return (
				<div className='questsContainer'>
					<h4>Longest Quest Completed</h4>
					<img src='./images/twentyfivemilebadge.png' />
				</div>
			)
		} return (
				<div className='questsContainer'>
					<h4>Longest Quest Completed</h4>
					<h5>Get running and do some quests!</h5>
				</div>
			)
	} 
})

export default QuestsContainer