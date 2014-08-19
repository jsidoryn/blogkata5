import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('mypost', this.modelFor('post'));
    this._super(controller, model);
  }
});
