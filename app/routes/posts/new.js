import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		newPost: function() {
			var post = this.store.createRecord('post', {
				title: this.get('controller.title'),
				body: this.get('controller.body')
			});
			var controller = this.get('controller');
			post.save().then(function() {
				controller.set('title', '');
				controller.set('body', '');
			});
		}
	}
});
