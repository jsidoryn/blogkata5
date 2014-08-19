import Ember from 'ember';

export default Ember.Route.extend({
	mypost: function() {
		return 'foo';
	}.property()
});
