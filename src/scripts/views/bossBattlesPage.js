import React from 'react'

import Banner from '../components/banner'
import UserInfo from '../components/userInfo'

var BossBattlesPage = React.createClass({
	render: function() {
		return (
			<div className='bossBattlesPage'>
				<Banner />
				<UserInfo />
				<BossBattleBadgeContainer />
			</div>
		)
	}
})

var BossBattleBadgeContainer = React.createClass({

	render: function() {
		// change CSS class based on whether user has unlocked badge or not
		var achievedfivek = (User.getCurrentUser().get('fiveKBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		var achievedfiveko = (User.getCurrentUser().get('fiveKBadge') === false) ? 'overlay' : ''
		var achievedtenk = (User.getCurrentUser().get('tenKBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		var achievedtenko = (User.getCurrentUser().get('tenKBadge') === false) ? 'overlay' : ''
		var achievedtenmile = (User.getCurrentUser().get('tenMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		var achievedtenmileo = (User.getCurrentUser().get('tenMileBadge') === false) ? 'overlay' : ''
		var achievedhalfmarathon = (User.getCurrentUser().get('halfMarathonBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		var achievedhalfmarathono = (User.getCurrentUser().get('halfMarathonBadge') === false) ? 'overlay' : ''
		var achievedeighteenmile = (User.getCurrentUser().get('eighteenMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		var achievedeighteenmileo = (User.getCurrentUser().get('eighteenMileBadge') === false) ? 'overlay' : ''
		var achievedmarathon = (User.getCurrentUser().get('marathonBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		var achievedmarathono = (User.getCurrentUser().get('marathonBadge') === false) ? 'overlay' : ''

		return (
			// badge is "always" displayed - whether or not it's actually visible
				// depends on current CSS class (aka whether it's been unlocked yet)
			<div className='bossBattleBadgeContainer'>
				<h1 className='badgeTitle'>Boss Battles</h1>
				<hr />

				<div className={achievedfivek}>
					<div className={achievedfiveko}>
						<img src='../images/fivekbadge.png' />
						<p>Run a 5K</p>
					</div>
				</div>

				<div className={achievedtenk}>
					<div className={achievedtenko}>
						<img src='../images/tenkbadge.png' />
						<p>Run a 10K</p>
					</div>
				</div>

				<div className={achievedtenmile}>
					<div className={achievedtenmileo}>
						<img src='../images/tenmilebadge.png' />
						<p>Run 10 Miles</p>
					</div>
				</div>

				<div className={achievedhalfmarathon}>
					<div className={achievedhalfmarathono}>
						<img src='../images/halfmarathonbadge.png' />
						<p>Half Marathon</p>
					</div>
				</div>

				<div className={achievedeighteenmile}>
					<div className={achievedeighteenmileo}>
						<img src='../images/eighteenmilebadge.png' />
						<p>Run 18 Miles</p>
					</div>
				</div>

				<div className={achievedmarathon}>
					<div className={achievedmarathono}>
						<img src='../images/marathonbadge.png' />
						<p>Marathon</p>
					</div>
				</div>
				
			</div>

		)
	}
})

export default BossBattlesPage