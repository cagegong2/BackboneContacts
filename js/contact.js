var Contact, contact1;

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