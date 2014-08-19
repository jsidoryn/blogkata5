import Ember from 'ember';

var Router = Ember.Router.extend({
  location: Blogkata5ENV.locationType
});

Router.map(function() {
  this.resource('posts', function() {
  	this.route('new');
  	this.resource('post', {path: '/:post_id'}, function() {
  		this.route('edit');
  		this.resource('comments', function() {
  			this.route('new');
  		});
  	});
  });
  this.route('post/edit');
  this.route('comments/new');
});

export default Router;
