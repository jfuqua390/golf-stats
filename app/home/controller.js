import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  handicap: Ember.inject.service(`handicap`),


  editBio(user, temp) {
    user.setProperties(temp);

    user.save();
  },

  calculateHandicap() {
    this.get(`handicap`);

  },
});
