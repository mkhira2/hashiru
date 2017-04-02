import React from 'react'

import Banner from '../components/banner'

var FAQPage = React.createClass({
	render: function() {
		return (
			<div className='faqPage'>
				<Banner />
				<br /><br />
				<h2>What the heck does Hashiru mean, anyway?</h2>
				<h4>Hashiru is the Japanese word for "run"</h4>
			</div>
		)
	}
})

export default FAQPage