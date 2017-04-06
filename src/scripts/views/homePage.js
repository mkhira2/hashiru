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

	render: function() {

		return (

			<div className='homePage'>
				<Banner />
				<h1 className='userInfo'>{ACTIONS.checkLogInName()}</h1>
				<div className='levelAndNumberHP'>
					<h2>Level</h2>
					<h2 className='levelHP'>{User.getCurrentUser().get('level')}</h2>
					<h2>Exp Points: {User.getCurrentUser().get('expPoints')}</h2>
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