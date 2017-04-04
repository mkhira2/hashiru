import React from 'react'
import User from '../models/userModel'

import ACTIONS from '../actions'
import STORE from '../store'

var UserInfo = React.createClass({
	render: function() {
		return (
			<div className='userInfo'>
				<h2 className='nameUserInfo'>{ACTIONS.checkLogInName()}</h2>
				<h2 className='levelUserInfo'>{ACTIONS.checkLevel()}</h2>
			</div>
		)
	}
})

export default UserInfo