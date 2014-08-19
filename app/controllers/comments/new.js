import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		newComment: function() {
			// console.log(this.get('body'));
			var comment = this.store.createRecord('comment', {
				body: this.get('body')
			});
			comment.save();
			console.log(this.get('mypost'));
		}
	}
});
