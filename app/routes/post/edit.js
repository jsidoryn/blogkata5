import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		editPost: function(post) {
			// console.log(post.get('title'));
			// post.set('title', post.get('title'));
			post.save();
		}
	}
});
