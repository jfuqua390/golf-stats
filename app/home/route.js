import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model() {
    const userId = this.get(`session.data.authenticated.userId`);
    return Ember.RSVP.hash({
      golfers: this.store.findAll(`golfer`),
      golfer: this.store.findRecord(`golfer`, userId),
      scores: this.store.findAll(`score`),
    });
  },
});
