import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model({ id }) {
    const userId = this.get(`session.data.authenticated.userId`);
    return Ember.RSVP.hash({
      loggeduser: this.store.findRecord(`golfer`, userId),
      golfer: this.store.findRecord(`golfer`, id),
      scores: this.store.findAll(`score`),
    });
  },
});
