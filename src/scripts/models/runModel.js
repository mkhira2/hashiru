import Backbone from 'backbone'

export var Run = Backbone.Model.extend({
	urlRoot: '/api/runs',
	idAttribute: '_id'
})

export var RunCollection = Backbone.Collection.extend({
	model: Run,
	url: '/api/runs'
})