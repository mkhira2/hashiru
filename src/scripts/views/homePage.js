import React from 'react'
import Backbone from 'backbone'
import Banner from '../components/banner'
import QuestsContainer from '../components/questsContainer'
import BossBattlesContainer from '../components/bossBattlesContainer'
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

		var updateProgressBar = {
		height: '11px',
		background: 'navy',
		textAlign: 'left',
		margin: 0,
		padding: 0,
		width: User.getCurrentUser().get('expPoints') % 10 + '0%'
	}

		return (

			<div className='homePage'>
				<Banner />
				<h1 className='userInfo'>{ACTIONS.checkLogInName()+ "'s status"}</h1>
				<div className='homeDiv'>
					<div className='topDiv'>
						<div className='levelAndNumberHP'>
							<h2>Level</h2>
							<h2 className='levelHP'>{User.getCurrentUser().get('level')}</h2>
						</div>
						<div className='milesAndBarHP'>
							<h2>Level {User.getCurrentUser().get('expPoints') % 10 + '0%'} Complete</h2><br />
							<div className='progressBarContainer'>
								<div className='progressBar' style={updateProgressBar}></div>
								<p className='homeTotalMiles'>Total Miles Run: {User.getCurrentUser().get('expPoints')}</p>
							</div>
						</div>
					</div>
					<div className='bottomDiv'>
						<BossBattlesContainer />
						<QuestsContainer />
					</div>
				</div>
			</div>
		)
	}
})

export default HomePage