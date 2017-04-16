import React from 'react'

import Banner from '../components/banner'
import UserInfo from '../components/userInfo'

var FAQPage = React.createClass({
	render: function() {

		// FAQ page displayed when user is logged in (with userInfo)
		return (
			<div className='faqPage'>
				<Banner />
				<UserInfo />
				<br /><br />
				<div className='faqs'>
					<h2>FAQ's</h2>
					<h4>What the heck does Hashiru mean, anyway?</h4>
					<h5>Hashiru is the Japanese word for "run"</h5>
					<h4>So, why should I Hashiru?</h4>
					<h5>Running has many benefits for the mind and body.</h5>
					<h4>How do I use your site?</h4>
					<h5>It's easy! Just make an account. After you run, come back here and log your miles.</h5>
					<h4>Why?</h4>
					<h5>So you can earn online badges that aren't worth anything, of course.</h5>
					<h4>What's the difference between a boss battle and a quest?</h4>
					<h5>Boss badges are earned per run. Quest badges are earned as miles accumulate over time.</h5>
				</div>
			</div>
		)
	}
})

export default FAQPage