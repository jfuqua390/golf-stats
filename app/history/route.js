import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model() {
    const userId = this.get(`session.data.authenticated.user.id`);

    return this.store.query(`score`, {
      filter: {
        include: `course`,
        where: {
          golferId: userId,
        },
      },
    });
  },
});
