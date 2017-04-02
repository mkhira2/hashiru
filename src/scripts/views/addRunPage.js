import React from 'react'

import Banner from '../components/banner.js'

var AddRunPage = React.createClass({
	render: function() {
		return (
			<div className='addRunPage'>
				<Banner />
				<h1>add a run</h1>
			</div>
		)
	}
})

export default AddRunPage