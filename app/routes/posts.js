import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('post');
	},
	actions: {
		deletePost: function(post) {
			// console.log(post);
			post.deleteRecord();
			post.save();
		}
	}

});
