var AppView, Contact, ContactBook, ContactView, Workspace, app, contact1, contact2, contact3, contact4, contacts;

Contact = Backbone.Model.extend({
  urlRoot: 'http://coffeescript.org/',
  defaults: function() {
    return {
      name: 'Unnamed',
      description: 'this is a lazy bone'
    };
  }
});

contact1 = new Contact({
  name: 'cage',
  id: 1
});

console.log(contact1.url());

contact2 = new Contact({
  name: 'tom',
  id: 2
});

contact3 = new Contact({
  name: 'jerry',
  id: 3
});

contact4 = new Contact({
  name: 'alex',
  id: 4
});

ContactBook = Backbone.Collection.extend({
  model: Contact
});

contacts = new ContactBook([contact1, contact2, contact3, contact4]);

contacts.remove(contact4);

console.log(contacts.length);

ContactView = Backbone.View.extend({
  tagName: 'li',
  initialize: function() {
    return this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    this.$el.html('<div><h3>' + this.model.attributes.name + '</h3><p>' + this.model.attributes.description + '</p></div>');
    return this;
  }
});

AppView = Backbone.View.extend({
  el: '#main',
  initialize: function() {
    this.$list = $('#contacts');
    return this.addAll();
  },
  addOne: function(contact) {
    var view;
    view = new ContactView({
      model: contact
    });
    return this.$list.append(view.render().el);
  },
  addAll: function() {
    this.$list.html('');
    return contacts.each(this.addOne, this);
  },
  render: function() {}
});

new AppView();

Workspace = Backbone.Router.extend({
  routes: {
    "help": "help",
    "search/:query": "search",
    "search/:query/p:page": "search"
  },
  help: function() {
    return console.log("help");
  },
  search: function(query, page) {
    return console.log("search: " + query + page);
  }
});

app = new Workspace();

Backbone.history.start();