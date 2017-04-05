import React from 'react'
import ACTIONS from '../actions'
import STORE from '../store'

import Banner from '../components/banner'
import UserInfo from '../components/userInfo'

var AddRunPage = React.createClass({

	componentWillMount(){
		STORE.on('dataUpdated', ()=> {
			this.setState(STORE.data)
		})
	},

	componentWillUnmount: function() {
		STORE.off('dataUpdated')
	},

	getInitialState(){
		return STORE.data
	},

	render: function() {
		return (
			<div className='addRunPage'>
				<Banner />
				<UserInfo />
				<AddRunForm />
				<Runs />
			</div>
		)
	}
})

var AddRunForm = React.createClass({

	_handleSubmit: function(evtObj){
		evtObj.preventDefault()
		var formEl = evtObj.target
		ACTIONS.increaseLevel(formEl.distance.value)
		formEl.reset()
	},

	render: function() {

		return (
			<div>
				<form className='form addRunForm' onSubmit={this._handleSubmit}>
					<h2>Log A Run</h2>
					<input className='addRunInput' type='number' name='distance' placeholder='Enter miles run' />
					<button className='addRunButton' type='submit'>Submit</button>
				</form>
			</div>
		)
	}
})

var Runs = React.createClass({
	render: function() {
		return (
			<div className='runs'></div>
		)
	}
})

export default AddRunPage