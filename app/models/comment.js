import DS from 'ember-data';

var Comment = DS.Model.extend({
  body: DS.attr(),
  post: DS.belongsTo('post', { async: true })
});

Comment.reopenClass({
	FIXTURES: [
		{
			id: 1,
			body: 'first comment',
			post: 1
		},
		{
			id: 2, 
			body: 'foo',
			post: 2
		},
		{
			id: 3, 
			body: 'bar',
			post: 2
		}
	]
});

export default Comment;