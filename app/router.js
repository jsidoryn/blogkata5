import Ember from 'ember';

var Router = Ember.Router.extend({
  location: Blogkata5ENV.locationType
});

Router.map(function() {
  this.resource('posts', function() {
  	this.resource('post', {path: '/:post_id'}, function() {
  		this.resource('comments');
  	});
  });
});

export default Router;
