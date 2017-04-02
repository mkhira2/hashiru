import React from 'react'

import Banner from '../components/banner.js'

var AddRunPage = React.createClass({
	render: function() {
		return (
			<div className='addRunPage'>
				<Banner />
				<AddRunForm />
			</div>
		)
	}
})

var AddRunForm = React.createClass({
	render: function() {
		return (
			<div className='form addRunForm'>
				<form onSubmit={this._handleSubmit}>
					<h2>Log A Run</h2>
					<input className='addRunInput' type='text' name='distance' placeholder='Enter miles run' />
					<button className='addRunButton' type='submit'>Submit</button>
				</form>
			</div>
		)
	}
})

export default AddRunPage