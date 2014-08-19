import DS from 'ember-data';

var Post = DS.Model.extend({
	title: DS.attr(),
	body: DS.attr(),
	comments: DS.hasMany('comment', {async: true})
});

Post.reopenClass({
	FIXTURES: [
		{
			id: 1,
			title: 'post 1',
			body: 'my 1 body',
			comments: [1,2]
		}, {
			id: 2,
			title: 'post 2',
			body: 'my 2 body',
			comments: [1]
		}
	]
});

export default Post;