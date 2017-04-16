import React from 'react'
import User from '../models/userModel'

import ACTIONS from '../actions'
import STORE from '../store'

var UserInfo = React.createClass({
	render: function() {

		var runner = User.getCurrentUser()
		// toFixed() limits cuts trailing numbers after decimal point
			// to keep progress bar percentage an even number
		var expNeeded = runner.get('expPoints').toFixed() % 10 + '0%'

		var updateProgressBar = {
		height: '11px',
		background: 'navy',
		textAlign: 'left',
		margin: 0,
		padding: 0,
		width: runner.get('expPoints').toFixed() % 10 + '0%'
	}
	
		return (
			<div className='userInfo'>
				<h2 className='nameUserInfo'>{ACTIONS.checkLogInName()}</h2>
				<h2 className='levelUserInfo'>{ACTIONS.checkLevel()}</h2>
				<div className='progressBar' style={updateProgressBar}></div>
				<p>Progress toward next level: {expNeeded}</p>
			</div>
		)
	}
})

export default UserInfo