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
			<p>bosses</p>
			</div>
		)
	}
})

export default BossBattlesPage