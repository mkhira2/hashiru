import React from 'react'

var Banner = React.createClass({
	render: function() {
		return (
			<div>
				<div className='banner'>
					<p className='quote'>THE BUSIEST MEN HAVE THE MOST LEISURE</p>
				</div>
				<div>
					<h1 className='title'>HASHIRU.</h1>
				</div>
				<nav className='navBar'>
				<a className='navATag homeATag' href='#home'>Home</a>
				<a className='navATag bossBattlesATag' href='#'>Boss Battles</a>
				<a className='navATag questsATag' href='#'>Quests</a>
				<a className='navATag addRunATag' href='#'>Add Run</a>
				<a className='navATag faqATag' href='#'>FAQ</a>
				<a className='navATag logInATag' href='#'>Log In</a>
				</nav>
			</div>
		)
	}
})

export default Banner