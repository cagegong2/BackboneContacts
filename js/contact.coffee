Contact = Backbone.Model.extend
	urlRoot: 'http://coffeescript.org/'
	defaults: ->
		name: 'Unnamed'
		description: 'this is a lazy bone'

contact1 = new Contact
	name:'cage'
	id:1

console.log contact1.url()

contact2 = new Contact
	name:'tom'
	id:2

contact3 = new Contact
	name:'jerry'
	id:3

contact4 = new Contact
	name:'alex'
	id:4

ContactBook = Backbone.Collection.extend
	model: Contact

contacts = new ContactBook([contact1, contact2, contact3, contact4])

contacts.remove(contact4)

console.log contacts.length

ContactView = Backbone.View.extend
	tagName:'li'
	initialize: ->
		this.listenTo(this.model,'change',this.render)
	render: ->
		this.$el.html('<div><h3>'+this.model.attributes.name+'</h3><p>'+this.model.attributes.description+'</p></div>')
		return this

AppView = Backbone.View.extend
	el: '#main'
	initialize: ->
		this.$list = $('#contacts')
		this.addAll()
	addOne: (contact)->
		view = new ContactView
			model: contact
		this.$list.append(view.render().el)

	addAll: ->
		this.$list.html('')
		contacts.each(this.addOne, this)

	render: ->

new AppView()

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