import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('comment');
		// debugger;
		// return this.store.find('comment', { post_id: this.modelFor('post').id });
		// find all comments and then filter by post
		// return this.store.find('comment');
		// return this.store.filter('comment', { body: 'foo' }
		// return this.store.find('comment').filterProperty('body', 'foo');
		// console.log('======');


		// var self = this;
		// return this.store.find('comment').then(function(comments) {
		// 	return comments.filter(function(comment) {
		// 		console.log('======');
		// 		console.log(comment);				
		// 		// var post = comment.get('post').then(function(post) { return post; });
		// 		console.log(self.modelFor('post').get('title'))
		// 		return "post 1" === self.modelFor('post').get('title');
		// 	});			
		// });

	}
});
