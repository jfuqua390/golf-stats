import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model() {
    const userId = this.get(`session.data.authenticated.user.id`);
    return Ember.RSVP.hash({
      scores: this.store.query(`score`, {
        filter: {
          include: `course`,
          where: {
            golferId: userId,
          },
        },
      }),
      courses: this.store.findAll(`course`),
      golfer: this.store.findRecord(`golfer`, userId),
    });
  },
});
