import Backbone from 'backbone'
import ACTIONS from './actions'

var STORE = Object.assign({},Backbone.Events,{

	data:{

		expPoints: 0,
		level: 0
	},

	get: function(prop) {

		return this.data[prop]
	},

	set: function(obj){

		this.data = Object.assign(this.data, obj)
		var totalXP = this.data
		console.log('totalXP', totalXP)
		this.trigger('dataUpdated')
	}
})

export default STORE
