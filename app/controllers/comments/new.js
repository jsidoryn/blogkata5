import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		newComment: function() {
			var comment = this.store.createRecord('comment', {
				post: this.get('mypost'),
				body: this.get('body')
			});
			comment.save();
		}
	}
});
