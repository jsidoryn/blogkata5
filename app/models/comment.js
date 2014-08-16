import DS from 'ember-data';

var Comment = DS.Model.extend({
  body: DS.attr()
});

Comment.reopenClass({
	FIXTURES: [
		{
			id: 1,
			body: 'first comment'
		},
		{
			id: 2, 
			body: 'foo'
		}
	]
});

export default Comment;