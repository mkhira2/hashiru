import React from 'react'

import Banner from '../components/banner'
import UserInfo from '../components/userInfo'

var QuestsPage = React.createClass({
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

var QuestBadgeContainer = React.createClass({
	render: function() {

		var achievedtwentyfive = (User.getCurrentUser().get('twentyFiveMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		var achievedtwentyfiveo = (User.getCurrentUser().get('twentyFiveMileBadge') === false) ? 'overlay' : ''
		var achievedfifty = (User.getCurrentUser().get('fiftyMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		var achievedfiftyo = (User.getCurrentUser().get('twentyFiveMileBadge') === false) ? 'overlay' : ''
		var achievedonehundred = (User.getCurrentUser().get('oneHundredMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		var achievedonehundredo = (User.getCurrentUser().get('twentyFiveMileBadge') === false) ? 'overlay' : ''
		var achievedonehundredfifty = (User.getCurrentUser().get('oneHundredFiftyMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		var achievedonehundredfiftyo = (User.getCurrentUser().get('twentyFiveMileBadge') === false) ? 'overlay' : ''
		var achievedtwohundred = (User.getCurrentUser().get('twoHundredMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		var achievedtwohundredo = (User.getCurrentUser().get('twentyFiveMileBadge') === false) ? 'overlay' : ''

		return (
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

				
			</div>

		)
	}
})

export default QuestsPage