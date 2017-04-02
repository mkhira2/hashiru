import React from 'react'

import Banner from '../components/banner.js'
import AchievementsContainer from '../components/achievementsContainer.js'

var HomePage = React.createClass({
	render: function() {
		return (
			<div className='homePage'>
				<Banner />
				<h1>KENJI</h1>
				<div className='levelAndNumberHP'>
					<h2>Level</h2>
					<h2 className='levelHP'>7</h2>
				</div>
				<div className='milesAndBarHP'>
					<h2>Miles To Next Level</h2>
					<p className='progressBarHP'>[==================]</p>
				</div>
				<AchievementsContainer />
			</div>
		)
	}
})

export default HomePage