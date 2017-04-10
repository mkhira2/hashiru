import Backbone from 'backbone'

export var Run = Backbone.Model.extend({
	urlRoot: '/api/runs',
	idAttribute: '_id'
})

export var Runner = Backbone.Model.extend({
	urlRoot: '/api/users',
	idAttribute: '_id'
})

export var RunnerCollection = Backbone.Collection.extend({
	model: Runner,
	url: '/api/users'
})

export var RunCollection = Backbone.Collection.extend({
	comparator: function(run) {
	return new Date(run.get('createdAt')).getTime() *-1
},
	model: Run,
	url: '/api/runs'
})