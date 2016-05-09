import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model() {
    const userId = this.get(`session.data.authenticated.userId`);

    return this.store.findRecord(`golfer`, userId);
  }
});
