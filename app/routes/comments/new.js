import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
		newComment: function() {
			var comment = this.store.createRecord('comment', {
				post: this.modelFor('post'),
				body: this.get('controller.body')
			});
			comment.save();
		}
	}
});
