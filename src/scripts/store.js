import Backbone from 'backbone'
import ACTIONS from './actions'

var STORE = Object.assign({},Backbone.Events,{

	data:{

		expPoints: 0
	},

	get: function(prop) {

		return this.data[prop]
	},

	set: function(obj){

		console.log('total xp points', obj)
		this.data = Object.assign(this.data, obj)
		this.trigger('dataUpdated')
	}
})

export default STORE
