Contact = Backbone.Model.extend
	urlRoot: 'http://coffeescript.org/'
	defaults: ->
		name: 'Unnamed'
		description: 'this is a lazy bone'

contact1 = new Contact
	name:'cage'
	id:1

console.log contact1.url()

Workspace = Backbone.Router.extend
	routes:
		"help": "help"
		"search/:query":"search"
		"search/:query/p:page": "search"
	help: ->
		console.log "help"
	search: (query, page)->
		console.log "search: " + query + page

app = new Workspace()
# start router listening
Backbone.history.start()