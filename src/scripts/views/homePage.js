import React from 'react'

import Banner from '../components/banner.js'
import AchievementsContainer from '../components/achievementsContainer.js'
import STORE from '../store'

var HomePage = React.createClass({

	componentWillMount(){

		STORE.on('dataUpdated', ()=> {
			this.setState(STORE.data)
		})
	},

	componentWillUnmount: function() {

		STORE.off('dataUpdated')
	},

	getInitialState(){

		return STORE.data
	},

	render: function() {

		return (

			<div className='homePage'>
				<Banner />
				<h1>KENJI</h1>
				<div className='levelAndNumberHP'>
					<h2>Level</h2>
					<h2 className='levelHP'>{STORE.get('level')}</h2>
				</div>
				<div className='milesAndBarHP'>
					<h2>Miles To Next Level</h2>
					<div className='progressBar'></div>
				</div>
				<AchievementsContainer />
			</div>
		)
	}
})

export default HomePage