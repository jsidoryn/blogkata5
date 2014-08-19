import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		newComment: function() {
			var self = this;
			var comment = this.store.createRecord('comment', {
				post: self.get('mypost'),
				body: this.get('body')
			});
			comment.save();
			console.log(this.get('mypost'));
		}
	}
});
