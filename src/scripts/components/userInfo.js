import React from 'react'
import User from '../models/userModel'

import ACTIONS from '../actions'
import STORE from '../store'

var UserInfo = React.createClass({
	render: function() {

		var updateProgressBar = {
		height: '11px',
		background: 'blue',
		textAlign: 'left',
		margin: 0,
		padding: 0,
		width: User.getCurrentUser().get('expPoints') % 10 + '0%'
	}

		var expNeeded = User.getCurrentUser().get('expPoints') % 10 + '0%'
	
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