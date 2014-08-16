import DS from 'ember-data';

var Post = DS.Model.extend({
	title: DS.attr(),
	body: DS.attr()
});

Post.reopenClass({
	FIXTURES: [
		{
			id: 1,
			title: 'post 1',
			body: 'my 1 body'
		}, {
			id: 2,
			title: 'post 2',
			body: 'my 2 body'
		}
	]
});

export default Post;