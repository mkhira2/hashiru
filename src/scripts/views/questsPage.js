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
		var achievedfifty = (User.getCurrentUser().get('fiftyMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		var achievedonehundred = (User.getCurrentUser().get('oneHundredMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		var achievedonehundredfifty = (User.getCurrentUser().get('oneHundredFiftyMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		var achievedtwohundred = (User.getCurrentUser().get('twoHundredMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'

		return (
			<div className='questBadgeContainer'>
				<h1 className='badgeTitle'>Quests</h1>
				<hr />

				<div className={achievedtwentyfive}>
					<img src='../images/twentyfivemilebadge.png' />
					<p>Run 25 Miles</p>
				</div>

				<div className={achievedfifty}>
					<img src='../images/fiftymilebadge.png' />
					<p>Run 50 Miles</p>
				</div>

				<div className={achievedonehundred}>
					<img src='../images/onehundredmilebadge.png' />
					<p>Run 100 Miles</p>
				</div>

				<div className={achievedonehundredfifty}>
					<img src='../images/onehundredfiftymilebadge.png' />
					<p>Run 150 Miles</p>
				</div>

				<div className={achievedtwohundred}>
					<img src='../images/twohundredmilebadge.png' />
					<p>Run 200 Miles</p>
				</div>

				
			</div>

		)
	}
})

export default QuestsPage