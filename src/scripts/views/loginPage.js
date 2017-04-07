import React from 'react'

import Banner from '../components/banner'
import ACTIONS from '../actions'

var LoginPage = React.createClass({
	render: function() {
		return (
			<div className='loginPage'>
				<Banner />
				<div className='firstForm'>
					<LoginForm />
					<RegisterForm />
				</div>
			</div>
		)
	}
})

var LoginForm = React.createClass({
	_handleSubmit: function(evtObj){
		evtObj.preventDefault()
		var formEl = evtObj.target
		ACTIONS.logUserIn(formEl.email.value, formEl.password.value)
	},

	render: function(){
		return (
			<div className='form loginForm'>
				<h2>Login</h2>
				<form onSubmit={this._handleSubmit}>
					<input className='loginInput' type='text' name='email' placeholder='enter your email' /> <br />
					<input className='loginInput' type='password' name='password' placeholder='enter your password' /> <br />
					<button className='loginButton' type='submit'>Submit</button>
				</form>
			</div>
		)
	}
})

var RegisterForm = React.createClass({
	_handleSubmit: function(evtObj){
		evtObj.preventDefault()
		var formEl = evtObj.target
		var userData = {
			name: formEl.yourName.value,
			email: formEl.email.value,
			password: formEl.password.value
		}
		ACTIONS.registerUser(userData)
		formEl.reset()
	},
	render: function(){
		return (
			<div className='form registerForm'>
				<h2>Register</h2>
				<form onSubmit={this._handleSubmit}>
					<input className='loginInput' type='text' name='yourName' placeholder='create a username' /><br />
					<input className='loginInput' type='text' name='email' placeholder='enter email' /><br />
					<input className='loginInput' type='password' name='password' placeholder='create password' /><br />
					<button className='loginButton' type='submit'>Submit</button>
			</form>
			</div>
		)
	}
})
export default LoginPage