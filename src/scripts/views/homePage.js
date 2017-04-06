import React from 'react'
import Backbone from 'backbone'
import Banner from '../components/banner.js'
import AchievementsContainer from '../components/achievementsContainer.js'
import STORE from '../store'
import User from '../models/userModel'
import ACTIONS from '../actions'

var HomePage = React.createClass({

	componentWillMount(){
		STORE.on('dataUpdated', ()=> {
			this.setState(STORE.data)
		})
	},

	componentWillUnmount: function() {

		STORE.off('dataUpdated')
	},

	getInitialState() {

		return STORE.data
	},

	// updateProgressBar: function() {
	// 	updateProgressBar.style.width = User.getCurrentUser.get('expPoints').slice(-1) + '0' + '%'
	// },

	render: function() {

		var updateProgressBar = {
		height: '11px',
		background: 'blue',
		textAlign: 'left',
		margin: 0,
		padding: 0,
		width: User.getCurrentUser().get('expPoints') % 10 + '0%'
	}

		return (

			<div className='homePage'>
				<Banner />
				<h1 className='userInfo'>{ACTIONS.checkLogInName()}</h1>
				<div className='levelAndNumberHP'>
					<h2>Level</h2>
					<h2 className='levelHP'>{User.getCurrentUser().get('level')}</h2>
				</div>
				<div className='milesAndBarHP'>
					<h2>Progress To Next Level</h2>
					<div className='progressBarContainer'>
						<div className='progressBar' style={updateProgressBar}></div>
					</div>
				</div>
				<AchievementsContainer />
			</div>
		)
	}
})

export default HomePage