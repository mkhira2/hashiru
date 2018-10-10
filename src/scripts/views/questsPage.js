import React from 'react'

import Banner from '../components/banner'
import UserInfo from '../components/userInfo'

const QuestsPage = React.createClass({
	render: function() {
		return (
			<div className='questsPage'>
				<Banner />
				<UserInfo />
				<QuestBadgeContainer />
			</div>
		)
	}
})

const QuestBadgeContainer = React.createClass({
	
	render: function() {
		// change CSS class based on whether user has unlocked badge or not
		const achievedtwentyfive = (User.getCurrentUser().get('twentyFiveMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		const achievedtwentyfiveo = (User.getCurrentUser().get('twentyFiveMileBadge') === false) ? 'overlay' : ''
		const achievedfifty = (User.getCurrentUser().get('fiftyMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		const achievedfiftyo = (User.getCurrentUser().get('fiftyMileBadge') === false) ? 'overlay' : ''
		const achievedonehundred = (User.getCurrentUser().get('oneHundredMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		const achievedonehundredo = (User.getCurrentUser().get('oneHundredMileBadge') === false) ? 'overlay' : ''
		const achievedonehundredfifty = (User.getCurrentUser().get('oneHundredFiftyMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		const achievedonehundredfiftyo = (User.getCurrentUser().get('oneHundredFiftyMileBadge') === false) ? 'overlay' : ''
		const achievedtwohundred = (User.getCurrentUser().get('twoHundredMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		const achievedtwohundredo = (User.getCurrentUser().get('twoHundredMileBadge') === false) ? 'overlay' : ''
		const achievedtwohundredfifty = (User.getCurrentUser().get('twoHundredFiftyMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		const achievedtwohundredfiftyo = (User.getCurrentUser().get('twoHundredFiftyMileBadge') === false) ? 'overlay' : ''

		return (
			// badge is "always" displayed - whether or not it's actually visible
				// depends on current CSS class (aka whether it's been unlocked yet)
			<div className='questBadgeContainer'>
				<h1 className='badgeTitle'>Quests</h1>
				<hr />

				<div className={achievedtwentyfive}>
					<div className={achievedtwentyfiveo}>
						<img src='../images/twentyfivemilebadge.png' />
						<p>Run 25 Miles</p>
					</div>
				</div>

				<div className={achievedfifty}>
					<div className={achievedfiftyo}>
						<img src='../images/fiftymilebadge.png' />
						<p>Run 50 Miles</p>
					</div>
				</div>

				<div className={achievedonehundred}>
					<div className={achievedonehundredo}>
						<img src='../images/onehundredmilebadge.png' />
						<p>Run 100 Miles</p>
					</div>
				</div>

				<div className={achievedonehundredfifty}>
					<div className={achievedonehundredfiftyo}>
						<img src='../images/onehundredfiftymilebadge.png' />
						<p>Run 150 Miles</p>
					</div>
				</div>

				<div className={achievedtwohundred}>
					<div className={achievedtwohundredo}>
						<img src='../images/twohundredmilebadge.png' />
						<p>Run 200 Miles</p>
					</div>
				</div>

				<div className={achievedtwohundredfifty}>
					<div className={achievedtwohundredfiftyo}>
						<img src='../images/twohundredfiftymilebadge.png' />
						<p>Run 250 Miles</p>
					</div>
				</div>

				
			</div>

		)
	}
})

export default QuestsPage