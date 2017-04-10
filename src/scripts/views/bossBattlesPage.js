import React from 'react'

import Banner from '../components/banner'
import UserInfo from '../components/userInfo'

var BossBattlesPage = React.createClass({
	render: function() {
		return (
			<div className='questsPage'>
				<Banner />
				<UserInfo />
				<BossBattleBadgeContainer />
			</div>
		)
	}
})

var BossBattleBadgeContainer = React.createClass({

	render: function() {

		var achievedfivek = (User.getCurrentUser().get('fiveKBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		var achievedtenk = (User.getCurrentUser().get('tenKBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		var achievedtenmile = (User.getCurrentUser().get('tenMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		var achievedhalfmarathon = (User.getCurrentUser().get('halfMarathonBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		var achievedmarathon = (User.getCurrentUser().get('marathonBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		return (
			<div className='questBadgeContainer'>
				<h1 className='badgeTitle'>Boss Battles</h1>
				<hr />

				<div className={achievedfivek}>
					<img src='../images/fivekbadge.png' />
					<p>Run a 5K</p>
				</div>

				<div className={achievedtenk}>
					<img src='../images/tenkbadge.png' />
					<p>Run a 10K</p>
				</div>

				<div className={achievedtenmile}>
					<img src='../images/tenmilebadge.png' />
					<p>Run 10 Miles</p>
				</div>

				<div className={achievedhalfmarathon}>
					<img src='../images/halfmarathonbadge.png' />
					<p>Half Marathon</p>
				</div>

				<div className={achievedmarathon}>
					<img src='../images/marathonbadge.png' />
					<p>Marathon</p>
				</div>
				
			</div>

		)
	}
})

export default BossBattlesPage