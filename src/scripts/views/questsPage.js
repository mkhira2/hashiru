import React from 'react'

import Banner from '../components/banner.js'

var QuestsPage = React.createClass({
	render: function() {
		return (
			<div className='questsPage'>
				<Banner />
				<QuestBadgeContainer />
			</div>
		)
	}
})

var QuestBadgeContainer = React.createClass({
	render: function() {
		return (
			<div className='questBadgeContainer'>
			<p>quests</p>
			</div>
		)
	}
})

export default QuestsPage