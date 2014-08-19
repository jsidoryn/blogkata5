import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var self = this;
		return this.store.find('comment').then(function(comments) {
			return comments.filter(function(comment) {
				return comment.get('post') === self.modelFor('post');
			});
		});
	}
});
