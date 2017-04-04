import React from 'react'

import Banner from '../components/banner.js'

var BossBattlesPage = React.createClass({
	render: function() {
		return (
			<div className='bossBattlesPage'>
				<Banner />
				<BossBattleBadgeContainer />
			</div>
		)
	}
})

var BossBattleBadgeContainer = React.createClass({
	render: function() {
		return (
			<div className='bossBattleBadgeContainer'>

				<div className='runBadge twentyfiveMileBadge'>
					<img src='../images/twentyfivemilebadge.png' />
					<p>Run 25 Miles</p>
				</div>

				<div className='runBadge fiftyMileBadge'>
					<img src='../images/fiftymilebadge.png' />
					<p>Run 50 Miles</p>
				</div>

				<div className='runBadge onehundredMileBadge'>
					<img src='../images/onehundredmilebadge.png' />
					<p>Run 100 Miles</p>
				</div>

				<div className='runBadge onehundredfiftyMileBadge'>
					<img src='../images/onehundredfiftymilebadge.png' />
					<p>Run 150 Miles</p>
				</div>

				<div className='runBadge twohundredMileBadge'>
					<img src='../images/twohundredmilebadge.png' />
					<p>Run 200 Miles</p>
				</div>

				
			</div>

		)
	}
})

export default BossBattlesPage