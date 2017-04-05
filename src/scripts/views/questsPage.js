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
		return (
			<div className='questBadgeContainer'>
				<h1 className='badgeTitle'>Quests</h1>
				<hr />

				<div className='runBadge fiveKBadge'>
					<img src='../images/fivekbadge.png' />
					<p>Run a 5K</p>
				</div>

				<div className='runBadge tenKBadge'>
					<img src='../images/tenkbadge.png' />
					<p>Run a 10K</p>
				</div>

				<div className='runBadge tenMileBadge'>
					<img src='../images/tenmilebadge.png' />
					<p>Run 10 Miles</p>
				</div>

				<div className='runBadge halfMarathonBadge'>
					<img src='../images/halfmarathonbadge.png' />
					<p>Half Marathon</p>
				</div>

				<div className='runBadge MarathonBadge'>
					<img src='../images/marathonbadge.png' />
					<p>Marathon</p>
				</div>
				
			</div>

		)
	}
})

export default QuestsPage