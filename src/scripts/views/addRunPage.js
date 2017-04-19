import React from 'react'
import ACTIONS from '../actions'
import STORE from '../store'
import User from '../models/userModel.js'
import Banner from '../components/banner'
import UserInfo from '../components/userInfo'

var AddRunPage = React.createClass({

	componentWillMount(){
		ACTIONS.fetchAllRuns(this.props.userID)
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
				<AddRunForm runs={this.state.runCollection} />
			</div>
		)
	}
})

var AddRunForm = React.createClass({

	// preventDefault() captures user data instead of pushing to url
	// send data to ACTIONS page to use how we'd like
	_handleSubmit: function(evtObj){
		evtObj.preventDefault()
		var formEl = evtObj.target
		var runData = {
			run: formEl.miles.value,
			user_id: User.getCurrentUser().get('_id')
		}	
		ACTIONS.addRun(runData)
		ACTIONS.updateUserInfo(formEl.miles.value)
		formEl.reset()
	},

	render: function() {
		// generating Add Run form
		return (
			<div>
				<form className='form addRunForm' onSubmit={this._handleSubmit}>
					<h2>Log A Run</h2>
					<input className='addRunInput' type='text' name='miles' placeholder='Enter miles run' />
					<button className='addRunButton' type='submit'>Submit</button>
					<h3>Run History</h3>
					<p>Total Miles Run: {User.getCurrentUser().get('expPoints').toFixed(2)}</p>
					<RunList runs={this.props.runs} />
				</form>
			</div>
		)
	}
})

var RunList = React.createClass({
		// grabs run from Add Run form
	makeSingleRun: function(model) {
			return (
				<SingleRun run={model} key={model.cid} />
			)
	},
	render: function() {
		return (
			<div className='runList'>
				{this.props.runs.map(this.makeSingleRun)}
			</div>
		)
	}
})

var SingleRun = React.createClass({
	handleDelete: function() {
		ACTIONS.deleteRun(this.props.run)
	},

	render: function() {
		// displays logged run with current time and option to delete
		var date = this.props.run.get('createdAt')
		return (
			<div className="singleRun" >
				<div className='runDiv'>
					<p>{this.props.run.get('run') + ' miles'}</p>
					<div onClick={this.handleDelete} className='deleteRun'>&times;</div>
					<div className='runDate'>{moment(date).fromNow()}</div>
				</div>
			</div>
		)
	}
})

export default AddRunPage