var Contact, Workspace, app, contact1;

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