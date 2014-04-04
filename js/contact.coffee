Contact = Backbone.Model.extend
	urlRoot: 'http://coffeescript.org/'
	defaults: ->
		name: 'Unnamed'
		description: 'this is a lazy bone'

contact1 = new Contact
	name:'cage'
	id:1

console.log contact1.url()