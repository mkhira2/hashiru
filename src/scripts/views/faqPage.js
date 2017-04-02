import React from 'react'

import Banner from '../components/banner'

var FAQPage = React.createClass({
	render: function() {
		return (
			<div className='faqPage'>
				<Banner />
				<br /><br />
				<div className='faqs'>
					<h2>What the heck does Hashiru mean, anyway?</h2>
					<h4>Hashiru is the Japanese word for "run"</h4>
					<h2>So, why should I Hashiru?</h2>
					<h4>Running has many benefits for the mind and body.</h4>
					<h2>How do I use your site?</h2>
					<h4>It's easy! Just make an account. After you run, come back here and log your miles.</h4>
					<h2>Why?</h2>
					<h4>So you can earn online badges that aren't worth anything, of course.</h4>
				</div>
			</div>
		)
	}
})

export default FAQPage