import React from 'react'
import User from '../models/userModel.js'

import ACTIONS from '../actions'

var Banner = React.createClass({
	render: function() {
		var userLoggedOut = (User.getCurrentUser()) ? 'navATag hidden' : ''
		var userLoggedIn = (!User.getCurrentUser()) ? 'navATag hidden' : ''
		return (
			<div>
				<div className='banner'>
					<p className='quote'>run</p>
				</div>
				<div>
					<h1 className='title'>HASHIRU.</h1>
				</div>
				<nav className='navBar'>
				<a className={userLoggedIn} href='#home'>Home</a>
				<a className='navATag' href='#bossbattles'>Boss Battles</a>
				<a className='navATag' href='#quests'>Quests</a>
				<a className={userLoggedIn} href='#addrun'>Add Run</a>
				<a className='navATag' href='#faq'>FAQ</a>
				<a className={userLoggedOut} href='#login'>Log In</a>
				<a className={userLoggedIn} onClick={ACTIONS.logUserOut}>Log Out</a>
				</nav>
			</div>
		)
	}
})

export default Banner