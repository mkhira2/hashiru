import React from 'react'

const BossBattlesContainer = React.createClass({
	render: function() {

		/*
			if (current user has unlocked the relevant badge) {
				display the badge
			}
			else {
				tell you to get out there!
			}
		*/

		if (User.getCurrentUser().get('marathonBadge') === true) {
			return (
				<div className='bossBattlesContainer'>
					<h4>Hardest Boss Defeated</h4>
					<img src='./images/marathonbadge.png' />
				</div>
			)
		}

		if (User.getCurrentUser().get('eighteenMileBadge') === true) {
			return (
				<div className='bossBattlesContainer'>
					<h4>Hardest Boss Defeated</h4>
					<img src='./images/eighteenmilebadge.png' />
				</div>
			)
		}

		if (User.getCurrentUser().get('halfMarathonBadge') === true) {
			return (
				<div className='bossBattlesContainer'>
					<h4>Hardest Boss Defeated</h4>
					<img src='./images/halfmarathonbadge.png' />
				</div>
			)
		}

		if (User.getCurrentUser().get('tenMileBadge') === true) {
			return (
				<div className='bossBattlesContainer'>
					<h4>Hardest Boss Defeated</h4>
					<img src='./images/tenmilebadge.png' />
				</div>
			)
		}

		if (User.getCurrentUser().get('tenKBadge') === true) {
			return (
				<div className='bossBattlesContainer'>
					<h4>Hardest Boss Defeated</h4>
					<img src='./images/tenkbadge.png' />
				</div>
			)
		}

		if (User.getCurrentUser().get('fiveKBadge') === true) {
			return (
				<div className='bossBattlesContainer'>
					<h4>Hardest Boss Defeated</h4>
					<img src='./images/fivekbadge.png' />
				</div>
			)
		} return (
				<div className='bossBattlesContainer'>
					<h4>Hardest Boss Defeated</h4>
					<h5>Get running and beat some bosses!</h5>
				</div>
			)
	} 
})

export default BossBattlesContainer