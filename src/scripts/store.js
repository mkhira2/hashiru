import Backbone from 'backbone'
import ACTIONS from './actions'
import {RunCollection} from './models/runModel'

var STORE = Object.assign({},Backbone.Events,{

	data:{
		runCollection: new RunCollection(),
		expPoints: 0,
		level: 0
	},

	get: function(prop) {

		return this.data[prop]
	},

	set: function(obj){

		this.data = Object.assign(this.data, obj)
		var totalXP = this.data
		this.trigger('dataUpdated')
	}
})

export default STORE
