import Backbone from 'backbone'

export const Run = Backbone.Model.extend({
	urlRoot: '/api/runs',
	idAttribute: '_id'
})

export const Runner = Backbone.Model.extend({
	urlRoot: '/api/users',
	idAttribute: '_id'
})

export const RunnerCollection = Backbone.Collection.extend({
	model: Runner,
	url: '/api/users'
})

export const RunCollection = Backbone.Collection.extend({
	comparator: function(run) {
	return new Date(run.get('createdAt')).getTime() *-1
},
	model: Run,
	url: '/api/runs'
})