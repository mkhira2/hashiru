import React from 'react'

import Banner from '../components/banner'
import UserInfo from '../components/userInfo'

const BossBattlesPage = React.createClass({
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

const BossBattleBadgeContainer = React.createClass({

	render: function() {
		// change CSS class based on whether user has unlocked badge or not
		const achievedfivek = (User.getCurrentUser().get('fiveKBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		const achievedfiveko = (User.getCurrentUser().get('fiveKBadge') === false) ? 'overlay' : ''
		const achievedtenk = (User.getCurrentUser().get('tenKBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		const achievedtenko = (User.getCurrentUser().get('tenKBadge') === false) ? 'overlay' : ''
		const achievedtenmile = (User.getCurrentUser().get('tenMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		const achievedtenmileo = (User.getCurrentUser().get('tenMileBadge') === false) ? 'overlay' : ''
		const achievedhalfmarathon = (User.getCurrentUser().get('halfMarathonBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		const achievedhalfmarathono = (User.getCurrentUser().get('halfMarathonBadge') === false) ? 'overlay' : ''
		const achievedeighteenmile = (User.getCurrentUser().get('eighteenMileBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		const achievedeighteenmileo = (User.getCurrentUser().get('eighteenMileBadge') === false) ? 'overlay' : ''
		const achievedmarathon = (User.getCurrentUser().get('marathonBadge') === false) ? 'runBadge' : 'runBadgeHidden'
		const achievedmarathono = (User.getCurrentUser().get('marathonBadge') === false) ? 'overlay' : ''

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